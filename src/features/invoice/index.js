// src/features/invoice/index.js

import React, { useState, useEffect } from "react";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import DuplicateModal from "./components/DuplicateInvoModal";
import TitleCard from "../../components/Cards/TitleCard";
import Datepicker from "react-tailwindcss-datepicker";
import CardOption from "../../components/Cards/CardOption";
import { INVOICE_DATA } from "../../utils/dummyData";
import EditInvoiceModal from "./components/EditInvoiceModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import { useNavigate } from "react-router-dom";

const InvoicePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState(INVOICE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [invoiceToDuplicate, setInvoiceToDuplicate] = useState(null);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDuplicateClick = (invoice) => {
    setInvoiceToDuplicate(invoice);
    setShowDuplicateModal(true);
  };

  const handleConfirmDuplicate = () => {
    if (invoiceToDuplicate) {
      const duplicatedInvoice = { ...invoiceToDuplicate, invoice: `Copy-${invoiceToDuplicate.invoice}` };
      setInvoiceData((prevData) => [...prevData, duplicatedInvoice]);

      dispatch(
        showNotification({
          message: `Invoice ${invoiceToDuplicate.invoice} has been successfully duplicated!`,
          status: 1,
        })
      );

      setShowDuplicateModal(false);
      setInvoiceToDuplicate(null);
    }
  };

  const handleCancelDuplicate = () => {
    setShowDuplicateModal(false);
    setInvoiceToDuplicate(null);
  };

  const handleDatePickerValueChange = (newValue) => {
    setDateValue(newValue);
    updateInvoicePeriod(newValue);
  };

  const handleSearch = () => {
    setSearchTerm("");
  };

  const handleReset = () => {
    setDateValue({
      startDate: new Date(),
      endDate: new Date(),
    });
    setSearchTerm("");
  };

  const handleEditClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    if (!updatedInvoice.invoice || !updatedInvoice.customer) {
      dispatch(
        showNotification({
          message: "Invoice and Customer cannot be empty!",
          status: 2,
        })
      );
      return;
    }

    setInvoiceData((prevData) =>
      prevData.map((inv) =>
        inv.invoice === updatedInvoice.invoice ? updatedInvoice : inv
      )
    );

    dispatch(
      showNotification({
        message: `Invoice ${updatedInvoice.invoice} has been successfully edited!`,
        status: 1,
      })
    );

    setShowModal(false);
  };

  const updateInvoicePeriod = (newRange) => {
    setDateValue(newRange);
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  const handleDetailIDClick = (invoice) => {
    navigate(`/app/invoice/detailInvoice/${invoice.invoice}`);
  };

  const handleDetailClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDetail(true);
  };

  const handleDeleteClick = (invoice) => {
    setInvoiceToDelete(invoice);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (invoiceToDelete) {
      const updatedInvoiceData = invoiceData.filter((item) => item !== invoiceToDelete);
      setInvoiceData(updatedInvoiceData);
      setShowDeleteConfirm(false);
      setInvoiceToDelete(null);

      dispatch(
        showNotification({
          message: `Invoice ${invoiceToDelete.invoice} has been successfully deleted!`,
          status: 1,
        })
      );
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setInvoiceToDelete(null);
  };

  const filteredInvoice = invoiceData.filter(
    (invoice) =>
      invoice.issueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvoice.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvoice = filteredInvoice.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Partially Paid":
        return "bg-blue-400";
      case "Paid":
        return "bg-green-400";
      case "Sent":
        return "bg-yellow-400";
      default:
        return "";
    }
  };

  return (
    <>
      <CardOption topMargin="mt-2" title={"Select By :"}>
        {/* Filtering options here */}
      </CardOption>

      <TitleCard topMargin="mt-2" title="Manage Invoices">
        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">INVOICE</th>
                <th className="px-4 py-2">CUSTOMER</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedInvoice.map((invoice, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDetailIDClick(invoice)}
                      className="btn bg-transparent border-primary hover:bg-primary hover:text-white group text-sm"
                    >
                      {invoice.invoice}
                    </button>
                  </td>
                  <td className="px-4 py-2">{invoice.customer}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleDuplicateClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        aria-label="Duplicate Invoice"
                      >
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        aria-label="View Invoice"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        aria-label="Edit Invoice"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        aria-label="Delete Invoice"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TitleCard>

      {/* Modals for Edit, Delete Confirm, and Duplicate */}
      {showModal && (
        <EditInvoiceModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          invoice={selectedInvoice}
          onUpdate={handleUpdateInvoice}
        />
      )}

      {showDetail && (
        <DetailView
          invoice={selectedInvoice}
          onClose={() => setShowDetail(false)}
        />
      )}

      {showDeleteConfirm && invoiceToDelete && (
        <DeleteConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {showDuplicateModal && (
        <DuplicateModal
          onConfirm={handleConfirmDuplicate}
          onCancel={handleCancelDuplicate}
        />
      )}
    </>
  );
};

// Define the DetailView component here
const DetailView = ({ invoice, onClose }) => {
  if (!invoice) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
        <p className="text-sm">
          <strong>Invoice ID:</strong> {invoice.invoice}
        </p>
        <p className="text-sm">
          <strong>Customer:</strong> {invoice.customer}
        </p>
        <p className="text-sm">
          <strong>Issue Date:</strong> {invoice.issueDate}
        </p>
        <p className="text-sm">
          <strong>Due Date:</strong> {invoice.dueDate}
        </p>
        <p className="text-sm">
          <strong>Amount Due:</strong> {invoice.amountDue}
        </p>
        <p className="text-sm">
          <strong>Status:</strong> {invoice.status}
        </p>
        <button
          onClick={onClose}
          className="mt-4 btn bg-primary text-white hover:bg-secondary"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;
