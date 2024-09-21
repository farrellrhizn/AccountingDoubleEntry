import React, { useState, useEffect } from "react";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EditProposalModal from "./components/EditProposalModal";
import TitleCard from "../../components/Cards/TitleCard";
import Datepicker from "react-tailwindcss-datepicker";
import { PROPOSAL_DATA } from "../../utils/dummyData";
import CardOption from "../../components/Cards/CardOption";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const ProposalPage = () => {
  const [proposalData, setProposalData] = useState(PROPOSAL_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  const handleSearch = () => {
    // Logic for search action
    console.log("Search clicked");
  };

  const handleReset = () => {
    setDateValue({
      startDate: new Date(),
      endDate: new Date(),
    });
    // Additional reset logic if needed
    console.log("Reset clicked");
  };

  const handleEditClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowModal(true);
  };

  const handleDetailClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowDetail(true);
  };

  const filteredProposal = proposalData.filter(
    (proposal) =>
      proposal.issueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProposal.length / itemsPerPage);

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
  const paginatedProposal = filteredProposal.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Function to determine the status class
  const getStatusClass = (status) => {
    switch (status) {
      case "Draft":
        return "bg-yellow-400"; // Light orange/yellow color
      case "Accepted":
        return "bg-green-400"; // Green color
      case "Open":
        return "bg-blue-400"; // Blue color
      case "Close":
        return "bg-pink-400"; // Pink color
      case "Declined":
        return "bg-red-400"; // Red color
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

      <TitleCard topMargin="mt-2" title="Manage Proposals">
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
                <th className="px-4 py-2">PROPOSAL</th>
                <th className="px-4 py-2">CUSTOMER</th>
                <th className="px-4 py-2">CATEGORY</th>
                <th className="px-4 py-2">ISSUE DATE</th>
                <th className="px-4 py-2">STATUS</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProposal.map((proposal, index) => (
                <tr key={index}>
                  <td className="text-sm truncate" title={proposal.proposal}>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                      {proposal.proposal}
                    </button>
                  </td>
                  <td className="text-sm truncate" title={proposal.customer}>
                    {proposal.customer}
                  </td>
                  <td className="text-sm truncate" title={proposal.category}>
                    {proposal.category}
                  </td>
                  <td className="text-sm truncate" title={proposal.issueDate}>
                    {proposal.issueDate}
                  </td>
                  <td className="text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                        proposal.status
                      )} text-white`}
                    >
                      {proposal.status}
                    </span>
                  </td>
                  <td className="text-sm">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Key Action"
                      >
                        <KeyIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Duplicate Proposal"
                      >
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="View Details"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Edit Proposal"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Delete Proposal"
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProposal.length)} of {filteredProposal.length} entries
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
      {/* Modal Edit Proposal */}
      {showModal && (
        <EditProposalModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          proposal={selectedProposal}
        />
      )}
      {/* Detail View */}
      {showDetail && selectedProposal && (
        <DetailView
          proposal={selectedProposal}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

// DetailView Component
const DetailView = ({ proposal, onClose }) => {
  if (!proposal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Proposal Details</h2>
        <p className="text-sm">
          <strong>Proposal ID:</strong> {proposal.proposal}
        </p>
        <p className="text-sm">
          <strong>Customer:</strong> {proposal.customer}
        </p>
        <p className="text-sm">
          <strong>Category:</strong> {proposal.category}
        </p>
        <p className="text-sm">
          <strong>Issue Date:</strong> {proposal.issueDate}
        </p>
        <p className="text-sm">
          <strong>Status:</strong> {proposal.status}
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

export default ProposalPage;
