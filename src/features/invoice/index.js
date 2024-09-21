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

const InvoicePage = () => {
  const [invoiceData, setInvoiceData] = useState(INVOICE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleSearch = () => {
    console.log("Search clicked");
    // Implementasikan logika pencarian berdasarkan dateValue jika diperlukan
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

  const handleDetailClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDetail(true);
  };

  // Definisikan handleDeleteClick untuk menghapus invoice
  const handleDeleteClick = (invoice) => {
    const updatedInvoiceData = invoiceData.filter((item) => item !== invoice);
    setInvoiceData(updatedInvoiceData);
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
              <option>Draft</option>
              <option>Open</option>
              <option>Accepted</option>
              <option>Declined</option>
              <option>Close</option>
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
        {/* Kontrol Responsif untuk Entries dan Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
          {/* Entries Per Page */}
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
          {/* Search Bar */}
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

        {/* Tabel Responsif */}
        <div className="overflow-x-auto">
          <table className="table w-full">
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
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group text-sm">
                      {invoice.invoice}
                    </button>
                  </td>
                  <td className="px-4 py-2">{invoice.customer}</td>
                  <td className="px-4 py-2">{invoice.issueDate}</td>
                  <td className="px-4 py-2">{invoice.dueDate}</td>
                  <td className="px-4 py-2">{invoice.amountDue}</td>
                  <td
                    className={`flex justify-center mt-2 ml-2 h-12 ${getStatusClass(
                      invoice.status
                    )} text-white font-semibold text-center rounded-full w-26 text-sm`}
                  >
                    {invoice.status}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex grid-cols-1 gap-2">
                      <button
                        onClick={() => handleDetailClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2 text-sm"
                        aria-label="Duplicate Invoice"
                      >
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2 text-sm"
                        aria-label="View Invoice"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2 text-sm"
                        aria-label="Edit Invoice"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(invoice)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2 text-sm"
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

        {/* Pagination dan Informasi */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredInvoice.length)} of {filteredInvoice.length} entries
                    </div>
                    {/* Kontrol Pagination */}
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePrevPage}
                            className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            className={`btn bg-primary text-white hover:bg-secondary ${currentPage === totalPages || totalPages === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>
                </div>

      </TitleCard>

      {/* Modal Edit Invoice */}
      {showModal && (
        <EditInvoiceModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          invoice={selectedInvoice} // Gunakan prop 'invoice' alih-alih 'proposal'
        />
      )}
      {/* Detail View */}
      {showDetail && (
        <DetailView
          invoice={selectedInvoice} // Gunakan prop 'invoice' alih-alih 'proposal'
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  ); // Menutup pernyataan return
}; // Menutup fungsi InvoicePage

// DetailView Component
const DetailView = ({ invoice, onClose }) => {
  if (!invoice) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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
