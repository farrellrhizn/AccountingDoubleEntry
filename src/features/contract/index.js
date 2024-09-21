import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EditContractModal from "./components/EditContractModal";
import TitleCard from "../../components/Cards/TitleCard";
import { CONTRACT_DATA } from "../../utils/dummyData";
import CalendarView from "../../components/CalendarView";

const Contract = () => {
  const [contractData, setContractData] = useState(CONTRACT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const navigate = useNavigate();

  const handleContractClick = (id) => {
    navigate(`/contractDetail/${id}`); // Pastikan rute ini sudah didefinisikan
  };

  const handleEditClick = (contract) => {
    setSelectedContract(contract);
    setShowModal(true);
  };

  const handleDetailClick = (contract) => {
    setSelectedContract(contract);
    setShowDetail(true);
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
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
        return "bg-yellow-400";
      case "Active":
        return "bg-green-400";
      case "Inactive":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <TitleCard topMargin="mt-2" title="Manage Contract Accounts">
        {/* Kontrol Atas Responsif */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Entries per page */}
          <div className="flex items-center space-x-2">
            <select
              id="entriesPerPage"
              className="select select-bordered w-24"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label htmlFor="entriesPerPage" className="text-sm md:text-base">
              Entries per page:
            </label>
          </div>
          {/* Search Bar */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Tabel Responsif */}
        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedContracts.length > 0 ? (
                paginatedContracts.map((contract) => (
                  <tr key={contract.id}>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleContractClick(contract.id)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group w-full"
                      >
                        {contract.id}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">{contract.subject}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{contract.customer}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{contract.type}</td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {typeof contract.value === 'number' ? `$${contract.value.toFixed(2)}` : '-'}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">{contract.startDate}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{contract.endDate}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(contract.status)}`}
                      >
                        {contract.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleDetailClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEditClick(contract)}
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2 rounded-md">
                          <KeyIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-4 py-2 text-center text-gray-500">
                    No contracts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination dan Informasi */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          {/* Informasi */}
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredContract.length)} of {filteredContract.length} entries
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

      {/* Modal Edit */}
      {showModal && (
        <EditContractModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          contract={selectedContract}
        />
      )}
      {/* Modal Detail */}
      {showDetail && (
        <DetailView
          contract={selectedContract}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

const DetailView = ({ contract, onClose }) => {
  if (!contract) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
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
          <strong>Value:</strong> {typeof contract.value === 'number' ? `$${contract.value.toFixed(2)}` : '-'}
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
