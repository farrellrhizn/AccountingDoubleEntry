import React, { useState, useEffect } from "react";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EditAssetsModal from "./components/EditAssetsModal";
import TitleCard from "../../components/Cards/TitleCard";
import { ASSETS_DATA } from "../../utils/dummyData";

const AssetsPage = () => {
  const [assetData, setAssetData] = useState(ASSETS_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleEditClick = (asset) => {
    setSelectedAsset(asset);
    setShowModal(true);
  };

  const handleDetailClick = (asset) => {
    setSelectedAsset(asset);
    setShowDetail(true);
  };

  const filteredAssets = assetData.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

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
  const paginatedAssets = filteredAssets.slice(
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
      <TitleCard topMargin="mt-2" title="Manage Assets">
        {/* Kontrol Atas Responsif */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Entries per page */}
          <div className="flex items-center space-x-2">
            <label htmlFor="entriesPerPage" className="text-sm md:text-base">
              Entries per page:
            </label>
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
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supported Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedAssets.length > 0 ? (
                paginatedAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-4 py-2 text-sm md:text-base">{asset.name}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{asset.purchaseDate}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{asset.supportedDate}</td>
                    <td className="px-4 py-2 text-sm md:text-base">
                      {typeof asset.amount === 'number' ? `$${asset.amount.toFixed(2)}` : '-'}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">{asset.description}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleDetailClick(asset)}
                          className="btn bg-transparent border-primary p-2 hover:bg-primary hover:text-white rounded-md"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleEditClick(asset)}
                          className="btn bg-transparent border-primary p-2 hover:bg-primary hover:text-white rounded-md"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button className="btn bg-transparent border-primary p-2 hover:bg-primary hover:text-white rounded-md">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        <button className="btn bg-transparent border-primary p-2 hover:bg-primary hover:text-white rounded-md">
                          <KeyIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                    No assets found.
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
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAssets.length)} of {filteredAssets.length} entries
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

      {/* Modal Edit Assets */}
      {showModal && (
        <EditAssetsModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          asset={selectedAsset}
        />
      )}

      {/* Modal Detail Asset */}
      {showDetail && (
        <DetailView
          asset={selectedAsset}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

// Komponen DetailView
const DetailView = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Asset Details</h2>
        <p className="mb-2">
          <strong>Name:</strong> {asset.name}
        </p>
        <p className="mb-2">
          <strong>Purchase Date:</strong> {asset.purchaseDate}
        </p>
        <p className="mb-2">
          <strong>Supported Date:</strong> {asset.supportedDate}
        </p>
        <p className="mb-2">
          <strong>Amount:</strong> {typeof asset.amount === 'number' ? `$${asset.amount.toFixed(2)}` : '-'}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {asset.description}
        </p>
        <button
          onClick={onClose}
          className="mt-4 btn bg-primary text-white hover:bg-secondary w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AssetsPage;
