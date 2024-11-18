// src/pages/ContractPage.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import EditContractModal from "./components/EditContractModal";
import DeleteContractModal from "./components/DeleteContractModal";
import DuplicateModal from "./components/DuplicateContractModal";
import TitleCard from "../../components/Cards/TitleCard";
import { CONTRACT_DATA } from "../../utils/dummyData";
import { showNotification } from "../common/headerSlice";
import { useDispatch } from "react-redux";

const Contract = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [contractData, setContractData] = useState(CONTRACT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contractToDelete, setContractToDelete] = useState(null);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [contractToDuplicate, setContractToDuplicate] = useState(null);

  const handleContractClick = (contract) => {
    console.log("Navigating to contract detail with ID:", contract.id); // Debugging
    window.location.href = "./ContractDetail";
  };

  const handleEditClick = (contract) => {
    setSelectedContract(contract);
    setShowEditModal(true);
  };

  const handleDetailClick = (contract) => {
    setSelectedContract(contract);
    setShowDetail(true);
  };

  const handleDeleteClick = (contract) => {
    setContractToDelete(contract);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = (contractId) => {
    const updatedContracts = contractData.filter(
      (contract) => contract.id !== contractId
    );
    setContractData(updatedContracts);
    dispatch(
      showNotification({
        message: `Contract ID "${contractId}" has been deleted.`,
        status: 1,
      })
    );
    setIsDeleteModalOpen(false);
    setContractToDelete(null);
  };

  const handleKeyClick = (contractId) => {
    dispatch(
      showNotification({
        message: `Key action triggered for Contract ID "${contractId}".`,
        status: 1,
      })
    );
  };

  const handleSaveContract = (updatedContract) => {
    if (selectedContract) {
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

  const handleDuplicateClick = (contract) => {
    setContractToDuplicate(contract);
    setShowDuplicateModal(true);
  };

  const handleConfirmDuplicate = () => {
    if (contractToDuplicate) {
      const duplicatedContract = {
        ...contractToDuplicate,
        id: `Copy-${contractToDuplicate.id}`,
      };
      setContractData((prevData) => [...prevData, duplicatedContract]);

      dispatch(
        showNotification({
          message: `Contract ID "${contractToDuplicate.id}" has been duplicated successfully.`,
          status: 1,
        })
      );

      setShowDuplicateModal(false);
      setContractToDuplicate(null);
    }
  };

  const handleCancelDuplicate = () => {
    setShowDuplicateModal(false);
    setContractToDuplicate(null);
  };

  const filteredContract = contractData.filter(
    (contract) =>
      contract.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContract.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, searchTerm]);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContracts = filteredContract.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500";
      case "Active":
        return "bg-green-500";
      case "Inactive":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <TitleCard topMargin="mt-2" title="Manage Contract Accounts">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
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
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 text-center">Action</th>
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
                    <td className="px-4 py-2">{contract.subject}</td>
                    <td className="px-4 py-2">{contract.customer}</td>
                    <td className="px-4 py-2">{contract.type}</td>
                    <td className="px-4 py-2">
                      {typeof contract.value === "number"
                        ? `$${contract.value.toFixed(2)}`
                        : "-"}
                    </td>
                    <td className="px-4 py-2">{contract.startDate}</td>
                    <td className="px-4 py-2">{contract.endDate}</td>
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
                        <button
                          onClick={() => handleDuplicateClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Duplicate Contract ID ${contract.id}`}
                        >
                          <DocumentDuplicateIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDetailClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`View details of Contract ID ${contract.id}`}
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEditClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Edit Contract ID ${contract.id}`}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                          aria-label={`Delete Contract ID ${contract.id}`}
                        >
                          <TrashIcon className="h-5 w-5" />
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

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="text-sm text-gray-700">
            Showing {filteredContract.length === 0 ? 0 : startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredContract.length)} of{" "}
            {filteredContract.length} entries
          </div>
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

      {showEditModal && (
        <EditContractModal
          showModal={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedContract(null);
          }}
          contract={selectedContract}
          onSave={handleSaveContract}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteContractModal
          contractData={contractToDelete}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setContractToDelete(null);
          }}
          onDelete={handleDelete}
        />
      )}

      {showDuplicateModal && (
        <DuplicateModal
          onConfirm={handleConfirmDuplicate}
          onCancel={handleCancelDuplicate}
        />
      )}

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

const DetailView = ({ contract, onClose }) => {
  if (!contract) return null;

  return (
    <div className="modal modal-open">
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
