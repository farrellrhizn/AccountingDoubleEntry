import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EditVendorModal from './components/EditVendorModal';
import TitleCard from '../../components/Cards/TitleCard';
import { VENDOR_ACC } from '../../utils/dummyData';

const VendorAcc = () => {
    const [vendors, setVendors] = useState(VENDOR_ACC);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    const handleEditClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowModal(true);
    };

    const handleDetailClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowDetail(true);
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
                {/* Kontrol Responsif untuk Entries dan Search */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    {/* Entries Per Page */}
                    <div className="flex items-center">
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
                                <tr key={index}>
                                    <td>
                                        <button className='btn bg-transparent border-primary hover:bg-primary hover:text-white group text-sm'>
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

                {/* Pagination dan Informasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredVendors.length)} of {filteredVendors.length} entries
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

            {/* Modal Edit Vendor */}
            {showModal && 
                <EditVendorModal 
                    showModal={showModal} 
                    onClose={() => setShowModal(false)} 
                    vendor={selectedVendor} 
                />
            }

            {/* Detail View */}
            {showDetail && selectedVendor && (
                <DetailView 
                    vendor={selectedVendor} 
                    onClose={() => setShowDetail(false)} 
                />
            )}
        </>
    ); // Menambahkan tanda kurung tutup untuk return

}; // Menutup fungsi VendorAcc

const DetailView = ({ vendor, onClose }) => {
    if (!vendor) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
                <h2 className="text-xl font-bold mb-4">Vendor Details</h2>
                <p className="text-sm"><strong>ID:</strong> {vendor.id}</p>
                <p className="text-sm"><strong>Name:</strong> {vendor.name}</p>
                <p className="text-sm"><strong>Contact:</strong> {vendor.contact}</p>
                <p className="text-sm"><strong>Email:</strong> {vendor.email}</p>
                <p className="text-sm"><strong>Balance:</strong> {vendor.balance}</p>
                <p className="text-sm"><strong>Last Login At:</strong> {vendor.lastLoginAt}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default VendorAcc;
