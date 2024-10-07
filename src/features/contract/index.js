// src/pages/ContractPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EditContractModal from "./components/EditContractModal";
import DeleteContractModal from "./components/DeleteContractModal"; // Ensure file name is correct
import TitleCard from "../../components/Cards/TitleCard";
import { CONTRACT_DATA } from "../../utils/dummyData";
import { showNotification } from "../common/headerSlice"; // Assuming this slice exists
import { useDispatch } from "react-redux";

const Contract = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State Variables
  const [contractData, setContractData] = useState(CONTRACT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contractToDelete, setContractToDelete] = useState(null);

  // Handle Navigation to Contract Detail Page
  const handleContractClick = (contract) => {
    navigate(`detailContract`); // Ensure this route is defined
  };

  // Handle Opening the Edit Modal
  const handleEditClick = (contract) => {
    setSelectedContract(contract);
    setShowEditModal(true);
  };

  // Handle Opening the Detail View
  const handleDetailClick = (contract) => {
    setSelectedContract(contract);
    setShowDetail(true);
  };

  // Handle Opening the Delete Modal
  const handleDeleteClick = (contract) => {
    setContractToDelete(contract);
    setIsDeleteModalOpen(true);
  };

  // Handle Deleting a Contract
  const handleDelete = (contractId) => {
    const updatedContracts = contractData.filter(
      (contract) => contract.id !== contractId
    );
    setContractData(updatedContracts);
    dispatch(
      showNotification({
        message: `Contract ID "${contractId}" has been deleted.`,
        status: 1, // Assuming status 1 indicates success
      })
    );
    setIsDeleteModalOpen(false);
    setContractToDelete(null);
  };

  // Handle Key Action (Placeholder Function)
  const handleKeyClick = (contractId) => {
    // Implement your key action logic here
    dispatch(
      showNotification({
        message: `Key action triggered for Contract ID "${contractId}".`,
        status: 1,
      })
    );
  };

  // Handle Saving Edited or New Contracts
  const handleSaveContract = (updatedContract) => {
    if (selectedContract) {
      // Edit Mode: Update Existing Contract
      const updatedContracts = contractData.map((contract) =>
        contract.id === updatedContract.id ? updatedContract : contract
      );
      setContractData(updatedContracts);
      dispatch(
        showNotification({
          message: `Contract ID "${updatedContract.id}" has been updated successfully.`,
          status: 1,
        })
      );
    } else {
      // Add Mode: Add New Contract
      setContractData([updatedContract, ...contractData]);
      dispatch(
        showNotification({
          message: `New contract "${updatedContract.subject}" has been added successfully.`,
          status: 1,
        })
      );
    }
    setShowEditModal(false);
    setSelectedContract(null);
  };

  // Filter Contracts Based on Search Term
  const filteredContract = contractData.filter(
    (contract) =>
      contract.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContract.length / itemsPerPage);

  // Reset to First Page When Items Per Page or Search Term Changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, searchTerm]);

  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Determine Contracts to Display on Current Page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContracts = filteredContract.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Function to Assign Status-Based CSS Classes
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500"; // Updated to match order page
      case "Active":
        return "bg-green-500"; // Using 'Approved' color to align
      case "Inactive":
        return "bg-red-400"; // Retain red if needed
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Total Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-600">
            Total Contracts
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">$153.00</p>
            <span className="bg-primary p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* This Month Total Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-600">
            This Month Total Contracts
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-500">$83.00</p>
            <span className="bg-blue-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* This Week Total Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-600">
            This Week Total Contracts
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-orange-500">$0.00</p>
            <span className="bg-orange-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Last 30 Days Total Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-600">
            Last 30 Days Total Contracts
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-pink-500">$0.00</p>
            <span className="bg-pink-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <TitleCard topMargin="mt-2" title="Manage Contract Accounts">
        {/* Responsive Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Entries Per Page */}
          <div className="flex items-center space-x-2">
            <label htmlFor="entriesPerPage" className="text-sm md:text-base">
              Entries per page:
            </label>
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
          </div>
          {/* Search Bar */}
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

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead className="bg-gray-50">
              <tr>
                {/* Table Header */}
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedContracts.length > 0 ? (
                paginatedContracts.map((contract) => (
                  <tr key={contract.id}>
                    <td className="px-4 py-2">
                      <button
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                        onClick={() => handleContractClick(contract)}
                      >
                        {contract.id}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {contract.subject}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {contract.customer}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {contract.type}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {typeof contract.value === "number"
                        ? `$${contract.value.toFixed(2)}`
                        : "-"}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {contract.startDate}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {contract.endDate}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(
                          contract.status
                        )}`}
                      >
                        {contract.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center space-x-2">
                        {/* Detail Button */}
                        <button
                          onClick={() => handleDetailClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`View details of Contract ID ${contract.id}`}
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEditClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Edit Contract ID ${contract.id}`}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Delete Contract ID ${contract.id}`}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        {/* Key Action Button */}
                        <button
                          onClick={() => handleKeyClick(contract.id)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Perform key action on Contract ID ${contract.id}`}
                        >
                          <KeyIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No contracts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination and Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          {/* Information */}
          <div className="text-sm text-gray-700">
            Showing {filteredContract.length === 0 ? 0 : startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredContract.length)} of{" "}
            {filteredContract.length} entries
          </div>
          {/* Pagination Controls */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrevPage}
              className={`btn bg-primary text-white hover:bg-secondary ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
              aria-label="Previous Page"
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
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        </div>
      </TitleCard>

      {/* Edit Contract Modal */}
      {showEditModal && (
        <EditContractModal
          showModal={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedContract(null);
          }}
          contract={selectedContract}
          onSave={handleSaveContract} // Added onSave prop
        />
      )}

      {/* Delete Contract Modal */}
      {isDeleteModalOpen && (
        <DeleteContractModal
          contractData={contractToDelete} // Pass the contract to delete
          onClose={() => {
            setIsDeleteModalOpen(false);
            setContractToDelete(null);
          }}
          onDelete={handleDelete} // Pass the delete handler
        />
      )}

      {/* Detail View Modal */}
      {showDetail && (
        <DetailView
          contract={selectedContract}
          onClose={() => {
            setShowDetail(false);
            setSelectedContract(null);
          }}
        />
      )}
    </>
  );
};

// DetailView Component
const DetailView = ({ contract, onClose }) => {
  if (!contract) return null;

  return (
    <div className="modal modal-open">
      {" "}
      {/* Use modal class if available */}
      <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Contract Details</h2>
        <p className="mb-2">
          <strong>ID:</strong> {contract.id}
        </p>
        <p className="mb-2">
          <strong>Subject:</strong> {contract.subject}
        </p>
        <p className="mb-2">
          <strong>Customer:</strong> {contract.customer}
        </p>
        <p className="mb-2">
          <strong>Type:</strong> {contract.type}
        </p>
        <p className="mb-2">
          <strong>Value:</strong>{" "}
          {typeof contract.value === "number"
            ? `$${contract.value.toFixed(2)}`
            : "-"}
        </p>
        <p className="mb-2">
          <strong>Start Date:</strong> {contract.startDate}
        </p>
        <p className="mb-2">
          <strong>End Date:</strong> {contract.endDate}
        </p>
        <p className="mb-4">
          <strong>Status:</strong> {contract.status}
        </p>
        <button
          onClick={onClose}
          className="btn bg-primary text-white hover:bg-secondary w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contract;
