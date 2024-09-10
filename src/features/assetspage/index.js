import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EditAssetsModal from './components/EditAssetsModal';
import TitleCard from '../../components/Cards/TitleCard';
import { ASSETS_DATA } from '../../utils/dummyData';

const AssetsPage = () => {
    const [assetData, setAssetData] = useState(ASSETS_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
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

    const filteredAssets = assetData.filter(asset =>
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

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
    const paginatedAssets = filteredAssets.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Assets">
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
                                <th className="w-24 px-4 py-2">NAME</th>
                                <th className="w-32 px-4 py-2">PURCHASE DATE</th>
                                <th className="w-32 px-4 py-2">SUPPORTED DATE</th>
                                <th className="w-32 px-4 py-2">AMOUNT</th>
                                <th className="w-32 px-4 py-2">DESCRIPTION</th>
                                <th className="w-48 px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedAssets.map((asset, index) => (
                                <tr key={index}>
                                    <td>{asset.name}</td>
                                    <td>{asset.purchaseDate}</td>
                                    <td>{asset.supportedDate}</td>
                                    <td>{asset.amount}</td>
                                    <td>{asset.description}</td>
                                    <td>
                                        <div className="grid grid-cols-4 gap-2">
                                            <button className="btn bg-transparent border-primary p-0.5 hover:bg-primary hover:text-white group">
                                                <KeyIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDetailClick(asset)} className="btn bg-transparent border-primary p-0.5 hover:bg-primary hover:text-white group">
                                                <EyeIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleEditClick(asset)} className="btn bg-transparent border-primary p-0.5 hover:bg-primary hover:text-white group">
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button className="btn bg-transparent border-primary p-0.5 hover:bg-primary hover:text-white group">
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
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <div>
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAssets.length)} of {filteredAssets.length} entries
                    </div>
                    <button
                        onClick={handleNextPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </TitleCard>
            {showModal &&
                <EditAssetsModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    asset={selectedAsset}
                />
            }
            {showDetail &&
                <DetailView
                    asset={selectedAsset}
                    onClose={() => setShowDetail(false)}
                />
            }
        </>
    );
};

const DetailView = ({ asset, onClose }) => {
    if (!asset) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Asset Details</h2>
                <p><strong>Name:</strong> {asset.name}</p>
                <p><strong>Purchase Date:</strong> {asset.purchaseDate}</p>
                <p><strong>Supported Date:</strong> {asset.supportedDate}</p>
                <p><strong>Amount:</strong> {asset.amount}</p>
                <p><strong>Description:</strong> {asset.description}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default AssetsPage;
