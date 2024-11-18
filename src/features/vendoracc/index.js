// src/pages/vendoracc/index.jsx

import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EditVendorModal from './components/EditVendorModal';
import DeleteVendorModal from './components/DeleteVendorModal';
import TitleCard from '../../components/Cards/TitleCard';
import { VENDOR_ACC } from '../../utils/dummyData';
import { useDispatch } from 'react-redux';
import { showNotification } from '../common/headerSlice';
import { useNavigate } from 'react-router-dom';

const VendorAcc = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [vendors, setVendors] = useState(VENDOR_ACC);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [vendorToDelete, setVendorToDelete] = useState(null);

    const handleEditClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowModal(true);
    };

    const handleDetailClick = (vendor) => {
        console.log("Navigating to vendor detail with ID:", vendor.id); // Debugging
        window.location.href = "./VendorDetail";
    };
    

    const handleDeleteClick = (vendor) => {
        setVendorToDelete(vendor);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setVendors(vendors.filter(v => v.id !== vendorToDelete.id));
        setShowDeleteModal(false);
        dispatch(
            showNotification({
                message: `Vendor "${vendorToDelete.id}" telah berhasil dihapus!`,
                status: 1,
            })
        );
        setVendorToDelete(null);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setVendorToDelete(null);
    };

    const filteredVendors = vendors.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.contact.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);

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
    const selectedVendors = filteredVendors.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Vendor">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center">
                        <label htmlFor="entriesPerPage" className="mr-2 text-sm">Entries per page:</label>
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

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">NAME</th>
                                <th className="px-4 py-2">CONTACT</th>
                                <th className="px-4 py-2">EMAIL</th>
                                <th className="px-4 py-2">BALANCE</th>
                                <th className="px-4 py-2">LAST LOGIN AT</th>
                                <th className="px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedVendors.map((vendor, index) => (
                                <tr key={vendor.id}>
                                    <td>
                                        <button 
                                            className="btn bg-transparent border-primary hover:bg-primary hover:text-white group text-sm"
                                            onClick={() => handleDetailClick(vendor)}
                                        >
                                            {vendor.id}
                                        </button>
                                    </td>
                                    <td className="text-sm">{vendor.name}</td>
                                    <td className="text-sm">{vendor.contact}</td>
                                    <td className="text-sm">{vendor.email}</td>
                                    <td className="text-sm">{vendor.balance}</td>
                                    <td className="text-sm">{vendor.lastLoginAt}</td>
                                    <td>
                                        <div className="flex space-x-2">
                                            <button 
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                                                onClick={() => handleDetailClick(vendor)}
                                            >
                                                <EyeIcon className="h-5 w-5" />
                                            </button>
                                            <button 
                                                onClick={() => handleEditClick(vendor)}
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                                            >
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button 
                                                onClick={() => handleDeleteClick(vendor)} 
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                            <button 
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                                                <KeyIcon className="h-5 w-5" />
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredVendors.length)} of {filteredVendors.length} entries
                    </div>
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

            {/* Edit Vendor Modal */}
            {showModal && 
                <EditVendorModal 
                    showModal={showModal} 
                    onClose={() => {
                        setShowModal(false);
                        dispatch(
                            showNotification({
                                message: `Vendor "${selectedVendor.id}" telah berhasil diperbarui!`,
                                status: 1,
                            })
                        );
                    }} 
                    vendor={selectedVendor} 
                />
            }

            {/* Delete Vendor Modal */}
            {showDeleteModal && (
                <DeleteVendorModal
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </>
    );
};

export default VendorAcc;
