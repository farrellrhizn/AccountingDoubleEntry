import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  KeyIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import EditProposalModal from "./components/EditProposalModal";
import DeletePropModal from "./components/DeletePropModal";
import DuplicatePropModal from "./components/DuplicatePropModal";
import TitleCard from "../../components/Cards/TitleCard";
import Datepicker from "react-tailwindcss-datepicker";
import { PROPOSAL_DATA } from "../../utils/dummyData";
import CardOption from "../../components/Cards/CardOption";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";

const ProposalPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [proposalData, setProposalData] = useState(PROPOSAL_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [proposalToDelete, setProposalToDelete] = useState(null);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [proposalToDuplicate, setProposalToDuplicate] = useState(null);

  const handleDatePickerValueChange = (newValue) => {
    setDateValue(newValue);
    updateProposalPeriod(newValue);
  };

  const updateProposalPeriod = (newRange) => {
    setDateValue(newRange);
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  const handleDuplicateClick = (proposal) => {
    setProposalToDuplicate(proposal);
    setShowDuplicateModal(true);
  };

  const confirmDuplicate = () => {
    if (proposalToDuplicate) {
      const duplicatedProposal = {
        ...proposalToDuplicate,
        id: new Date().getTime(),
        proposal: `${proposalToDuplicate.proposal} (Copy)`,
      };
      setProposalData((prevData) => [...prevData, duplicatedProposal]);
      setShowDuplicateModal(false);
      dispatch(
        showNotification({
          message: `Proposal "${proposalToDuplicate.proposal}" has been successfully duplicated!`,
          status: 1,
        })
      );
      setProposalToDuplicate(null);
    }
  };

  const cancelDuplicate = () => {
    setShowDuplicateModal(false);
    setProposalToDuplicate(null);
  };

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleReset = () => {
    setDateValue({
      startDate: new Date(),
      endDate: new Date(),
    });
    console.log("Reset clicked");
  };

  const handleEditClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowModal(true);
  };

  const handleDetailIDClick = (proposal) => {
    navigate(`/app/proposal/detailProposal`);
  };

  const handleDetailClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowDetail(true);
  };

  const handleSaveEdit = (updatedData) => {
    setProposalData((prevData) =>
      prevData.map((item) =>
        item.proposal === selectedProposal.proposal
          ? { ...item, ...updatedData }
          : item
      )
    );
    dispatch(
      showNotification({
        message: `Proposal "${updatedData.proposal}" has been successfully updated!`,
        status: 1,
      })
    );
  };

  const handleDeleteClick = (proposal) => {
    setProposalToDelete(proposal);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (proposalToDelete) {
      const updatedProposalData = proposalData.filter(
        (item) => item.proposal !== proposalToDelete.proposal
      );
      setProposalData(updatedProposalData);
      setShowDeleteModal(false);
      dispatch(
        showNotification({
          message: `Proposal "${proposalToDelete.proposal}" has been successfully deleted!`,
          status: 1,
        })
      );
      setProposalToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProposalToDelete(null);
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

  const getStatusClass = (status) => {
    switch (status) {
      case "Draft":
        return "bg-orange-500";
      case "Accepted":
        return "bg-green-500";
      case "Open":
        return "bg-blue-500";
      case "Close":
        return "bg-indigo-500";
      case "Declined":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
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

        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
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
                <tr key={proposal.id || index}>
                  <td className="text-sm truncate" title={proposal.proposal}>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                    onClick={() => handleDetailIDClick(proposal)}>
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
                  <td className="px-4 py-2">
                    <span
                      className={`flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(
                        proposal.status
                      )}`}
                    >
                      {proposal.status}
                    </span>
                  </td>
                  <td className="text-sm text-right">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleDetailIDClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Key Action"
                      >
                        <EyeIcon  className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDuplicateClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Duplicate Proposal"
                      >
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(proposal)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Edit Proposal"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(proposal)}
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

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredProposal.length)} of{" "}
            {filteredProposal.length} entries
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

      {showModal && (
        <EditProposalModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          proposal={selectedProposal}
          onSave={handleSaveEdit}
        />
      )}
      {showDetail && selectedProposal && (
        <DetailView
          proposal={selectedProposal}
          onClose={() => setShowDetail(false)}
        />
      )}
      {showDeleteModal && (
        <DeletePropModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
      {showDuplicateModal && (
        <DuplicatePropModal
          onConfirm={confirmDuplicate}
          onCancel={cancelDuplicate}
        />
      )}
    </>
  );
};

const DetailView = ({ proposal, onClose }) => {
  if (!proposal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Detail Proposal</h2>
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
