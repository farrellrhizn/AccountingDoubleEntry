import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini
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

  const navigate = useNavigate(); // Pindahkan ke sini untuk bisa digunakan dalam seluruh komponen

  const handleContractClick = () => {
    navigate(`contractDetail`);
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
        return "";
    }
  };

  return (
    <>
      <TitleCard topMargin="mt-2" title="Manage Contract Accounts">
        <div className="flex justify-between items-center mb-4">
          <div className="mr-4">
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
            <label htmlFor="entriesPerPage" className="ml-2">
              Entries per page:
            </label>
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
                <th className="w-24 px-4 py-2">ID</th>
                <th className="w-32 px-4 py-2">SUBJECT</th>
                <th className="w-32 px-4 py-2">CUSTOMER</th>
                <th className="w-32 px-4 py-2">TYPE</th>
                <th className="w-32 px-4 py-2">VALUE</th>
                <th className="w-32 px-4 py-2">START DATE</th>
                <th className="w-32 px-4 py-2">END DATE</th>
                <th className="w-32 px-4 py-2">STATUS</th>
                <th className="w-50 px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedContracts.map((contract, index) => (
                <tr key={index}>
                  <td>
                    <button
                      onClick={() => handleContractClick(contract.id)}
                      className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                    >
                      {contract.id}
                    </button>
                  </td>
                  <td>{contract.subject}</td>
                  <td>{contract.customer}</td>
                  <td>{contract.type}</td>
                  <td>{contract.value}</td>
                  <td>{contract.startDate}</td>
                  <td>{contract.endDate}</td>
                  <td
                    className={`flex justify-center mt-3.5 ${getStatusClass(
                      contract.status
                    )} text-white font-semibold text-center rounded-lg w-20`}
                  >
                    {contract.status}
                  </td>
                  <td>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                        <KeyIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDetailClick(contract)}
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(contract)}
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
            {Math.min(startIndex + itemsPerPage, filteredContract.length)} of{" "}
            {filteredContract.length} entries
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
        <EditContractModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          contract={selectedContract}
        />
      )}
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Contract Details</h2>
        <p>
          <strong>ID:</strong> {contract.id}
        </p>
        <p>
          <strong>Subject:</strong> {contract.subject}
        </p>
        <p>
          <strong>Customer:</strong> {contract.customer}
        </p>
        <p>
          <strong>Type:</strong> {contract.type}
        </p>
        <p>
          <strong>Value:</strong> {contract.value}
        </p>
        <p>
          <strong>Start Date:</strong> {contract.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {contract.endDate}
        </p>
        <p>
          <strong>Status:</strong> {contract.status}
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

export default Contract;
