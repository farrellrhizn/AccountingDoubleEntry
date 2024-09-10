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
        <div className="flex flex-wrap lg:flex-nowrap items-start">
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-3">Date</div>
            <div className="flex items-center">
              <Datepicker
                containerClassName="w-full lg:w-72"
                value={dateValue}
                theme={"light"}
                inputClassName="input input-bordered w-full lg:w-72"
                popoverDirection={"down"}
                toggleClassName="invisible"
                onChange={handleDatePickerValueChange}
                showShortcuts={true}
                primaryColor={"white"}
              />
            </div>
          </div>
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-3">Select Status</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-72">
                <option>Select Status</option>
                <option>Draft</option>
                <option>Open</option>
                <option>Accepted</option>
                <option>Declined</option>
                <option>Close</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-3">Select Customer</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-72">
                <option>Select Customer</option>
                {/* Add customer options here */}
              </select>
            </div>
          </div>
          <div className="w-full lg:w-auto flex items-center mt-4 lg:mt-9">
            <button className="btn btn-primary mr-2 w-full lg:w-auto">
              Apply
            </button>
            <button className="btn btn-secondary w-full lg:w-auto">
              Reset
            </button>
          </div>
        </div>
      </CardOption>

      <TitleCard topMargin="mt-2" title="Manage Proposals">
        <div className="flex justify-between items-center mb-4">
          <div className="mr-4">
            <label htmlFor="entriesPerPage" className="mr-2">
              Entries per page:
            </label>
            <select
              id="entriesPerPage"
              className="select select-bordered"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead>
              <tr>
                <th className="min-w-[150px] px-4 py-2">PROPOSAL</th>
                <th className="min-w-[150px] px-4 py-2">CUSTOMER</th>
                <th className="min-w-[150px] px-4 py-2">CATEGORY</th>
                <th className="min-w-[150px] px-4 py-2">ISSUE DATE</th>
                <th className="min-w-[150px] px-4 py-2">STATUS</th>
                <th className="min-w-[200px] px-4 py-2">ACTION</th>{" "}
                {/* Increased width */}
              </tr>
            </thead>
            <tbody>
              {paginatedProposal.map((proposal, index) => (
                <tr key={index}>
                  <td className="min-w-[150px]">
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                      {proposal.proposal}
                    </button>
                  </td>
                  <td className="min-w-[150px]">{proposal.customer}</td>
                  <td className="min-w-[150px]">{proposal.category}</td>
                  <td className="min-w-[150px]">{proposal.issueDate}</td>
                  <td
                    className={`flex justify-center mt-3.5 ml-2 h-12 ${getStatusClass(
                      proposal.status
                    )} text-white font-semibold text-center rounded-lg w-20 min-w-[150px]`}
                  >
                    {proposal.status}
                  </td>
                  <td className="min-w-[200px]">
                    <div className="grid grid-cols-5 gap-2">
                      <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                        <KeyIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                      >
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            className={`btn bg-primary text-white hover:bg-secondary ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredProposal.length)} of{" "}
            {filteredProposal.length} entries
          </div>
          <button
            onClick={handleNextPage}
            className={`btn bg-primary text-white hover:bg-secondary ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </TitleCard>
      {showModal && (
        <EditProposalModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          proposal={selectedProposal}
        />
      )}
      {showDetail && (
        <DetailView
          proposal={selectedProposal}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

const DetailView = ({ proposal, onClose }) => {
  if (!proposal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Proposal Details</h2>
        <p>
          <strong>Proposal ID:</strong> {proposal.proposal}
        </p>
        <p>
          <strong>Customer:</strong> {proposal.customer}
        </p>
        <p>
          <strong>Category:</strong> {proposal.category}
        </p>
        <p>
          <strong>Issue Date:</strong> {proposal.issueDate}
        </p>
        <p>
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
