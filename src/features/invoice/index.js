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
      const duplicatedInvoice = {
        ...invoiceToDuplicate,
        invoice: `Copy-${invoiceToDuplicate.invoice}`,
      };
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
    console.log("Navigating to invoice detail with ID:", invoice.id); // Debugging
    window.location.href = "./InvoiceDetail";
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
      const updatedInvoiceData = invoiceData.filter(
        (item) => item !== invoiceToDelete
      );
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
      invoice.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className="mb-3 text-sm">Date</div>
            <Datepicker
              containerClassName="w-full md:w-72"
              value={dateValue}
              theme={"light"}
              inputClassName="input input-bordered w-full text-sm"
              popoverDirection={"down"}
              toggleClassName="invisible"
              onChange={handleDatePickerValueChange}
              showShortcuts={true}
              primaryColor={"white"}
            />
          </div>
          <div>
            <div className="mb-3 text-sm">Select Customer</div>
            <select className="select select-bordered w-full md:w-72 text-sm">
              <option>Select Customer</option>
              <option>Keire</option>
              <option>Protiong</option>
              <option>Ida F. Mullen</option>
              <option>Teresa R McRae</option>
              <option>Joel O Dolan</option>
              <option>Jasper Gardner</option>
              <option>Kerleigh Mitchell</option>
            </select>
          </div>
          <div>
            <div className="mb-3 text-sm">Select Status</div>
            <select className="select select-bordered w-full md:w-72 text-sm">
              <option>Select Status</option>
              <option>Draft</option>
              <option>Sent</option>
              <option>Unpaid</option>
              <option>Partially Paid</option>
              <option>Paid</option>
            </select>
          </div>
          <div className="md:col-span-3 flex w-72 justify-start gap-4">
            <button
              className="btn btn-primary flex-1 text-sm"
              onClick={handleSearch}
            >
              Apply
            </button>
            <button
              className="btn btn-secondary flex-1 text-sm"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </CardOption>

      <TitleCard topMargin="mt-2" title="Manage Invoices">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <select
              id="entriesPerPage"
              className="select select-bordered w-24"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label htmlFor="entriesPerPage" className="text-sm md:text-base">
              Entries per page
            </label>
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search by Subject or Customer..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Contracts"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead>
              <tr>
                <th className="px-4 py-2">INVOICE</th>
                <th className="px-4 py-2">CUSTOMER</th>
                <th className="px-4 py-2">ISSUE DATE</th>
                <th className="px-4 py-2">DUE DATE</th>
                <th className="px-4 py-2">AMOUNT DUE</th>
                <th className="px-4 py-2">STATUS</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
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
                  <td className="px-4 py-2">{invoice.issueDate}</td>
                  <td className="px-4 py-2">{invoice.dueDate}</td>
                  <td className="px-4 py-2">{invoice.amountDue}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(
                        invoice.status
                      )}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
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

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
  {/* Informasi Pagination */}
  <div className="text-sm text-gray-700">
    Showing {filteredInvoice.length > 0 ? startIndex + 1 : 0} to{" "}
    {Math.min(startIndex + itemsPerPage, filteredInvoice.length)} of{" "}
    {filteredInvoice.length} entries
  </div>
  {/* Kontrol Pagination */}
  <div className="flex space-x-2">
    <button
      onClick={handlePrevPage}
      className={`btn bg-primary text-white hover:bg-secondary ${
        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <button
      onClick={handleNextPage}
      className={`btn bg-primary text-white hover:bg-secondary ${
        currentPage === totalPages || totalPages === 0
          ? "opacity-50 cursor-not-allowed"
          : ""
      }`}
      disabled={currentPage === totalPages || totalPages === 0}
    >
      Next
    </button>
  </div>
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

export default InvoicePage;
