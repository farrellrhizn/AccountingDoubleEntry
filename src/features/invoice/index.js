// src/features/invoice/index.js

import React, { useState, useEffect } from "react";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import TitleCard from "../../components/Cards/TitleCard";
import Datepicker from "react-tailwindcss-datepicker";
import CardOption from "../../components/Cards/CardOption";
import { INVOICE_DATA } from "../../utils/dummyData";
import EditInvoiceModal from "./components/EditInvoiceModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal"; // Import DeleteConfirmModal
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
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    setDateValue(newValue);
    updateInvoicePeriod(newValue);
  };

  const handleSearch = () => {
    console.log("Search clicked");
    // Implement search logic if needed
  };

  const handleReset = () => {
    setDateValue({
      startDate: new Date(),
      endDate: new Date(),
    });
    setSearchTerm(""); // Reset search term as well
    console.log("Reset clicked");
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
          status: 2, // Ensure status reflects your definition (e.g., 2 for failure)
        })
      );
      return;
    }

    // Update invoice data
    setInvoiceData((prevData) =>
      prevData.map((inv) =>
        inv.invoice === updatedInvoice.invoice ? updatedInvoice : inv
      )
    );

    // Show success notification
    dispatch(
      showNotification({
        message: `Invoice ${updatedInvoice.invoice} has been successfully edited!`,
        status: 1, // Ensure status reflects your definition (e.g., 1 for success)
      })
    );

    // Close modal
    setShowModal(false);
  };

  const updateInvoicePeriod = (newRange) => {
    setDateValue(newRange); // Update the date range in the state
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  const handleDetailIDClick = (invoice) => {
    navigate(`/app/invoice/detailInvoice`);
  }
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
      
      // Log deletion
      console.log(`Invoice ${invoiceToDelete.invoice} has been deleted.`);
      
      // Send notification using dispatch
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
        return ""; // Default case (optional)
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
            <div className="mb-3 text-sm">Select Status</div>
            <select className="select select-bordered w-full md:w-72 text-sm">
              <option>Select Status</option>
              <option>Paid</option>
              <option>Partially Paid</option>
              <option>Sent</option>
            </select>
          </div>
          <div>
            <div className="mb-3 text-sm">Select Customer</div>
            <select className="select select-bordered w-full md:w-72 text-sm">
              <option>Select Customer</option>
              {/* Add customer options here */}
            </select>
          </div>
          <div className="md:col-span-3 w-72 flex justify-start gap-4">
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center w-full md:w-auto">
            <label htmlFor="entriesPerPage" className="mr-2 text-sm">
              Entries per page:
            </label>
            <select
              id="entriesPerPage"
              className="select select-bordered text-sm w-full md:w-auto"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">INVOICE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISSUE DATE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DUE DATE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT DUE</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedInvoice.map((invoice, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group text-sm"
                      onClick={() => handleDetailIDClick(invoice)}>
                      {invoice.invoice}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm md:text-base">{invoice.customer}</td>
                  <td className="px-4 py-2 text-sm md:text-base">{invoice.issueDate}</td>
                  <td className="px-4 py-2 text-sm md:text-base">{invoice.dueDate}</td>
                  <td className="px-4 py-2 text-sm md:text-base">{invoice.amountDue}</td>
                  <td className={`flex items-center justify-center mt-5 px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(invoice.status)}`}>
                    {invoice.status}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleDetailClick(invoice)}
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

        {/* Pagination and Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredInvoice.length)} of{" "}
            {filteredInvoice.length} entries
          </div>
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

      {/* Edit Invoice Modal */}
      {showModal && (
        <EditInvoiceModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          invoice={selectedInvoice}
          onUpdate={handleUpdateInvoice} // Ensure this prop is passed correctly
        />
      )}

      {/* Detail View */}
      {showDetail && (
        <DetailView
          invoice={selectedInvoice}
          onClose={() => setShowDetail(false)}
        />
      )}

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && invoiceToDelete && (
        <DeleteConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

// DetailView Component
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
