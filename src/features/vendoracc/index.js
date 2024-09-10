import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EditVendorModal from './components/EditVendorModal';
import { useDispatch, useSelector } from "react-redux"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
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
            <TitleCard topMargin="mt-2" title="Manage Vendor"  >
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
                            <th className="w-32 px-4 py-2">ID</th>
                            <th className="w-32 px-4 py-2">NAME</th>
                            <th className="w-32 px-4 py-2">CONTACT</th>
                            <th className="w-32 px-4 py-2">EMAIL</th>
                            <th className="w-32 px-4 py-2">BALANCE</th>
                            <th className="w-38 px-4 py-2">LAST LOGIN AT</th>
                            <th className="w-50 px-4 py-2">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedVendors.map((vendor, index) => (
                            <tr key={index}>
                                <td>
                                    <button className='btn bg-transparent border-primary hover:bg-primary hover:text-white group'>
                                        {vendor.id}
                                    </button>
                                </td>
                                <td>{vendor.name}</td>
                                <td>{vendor.contact}</td>
                                <td>{vendor.email}</td>
                                <td>{vendor.balance}</td>
                                <td>{vendor.lastLoginAt}</td>
                                <td>
                                    <div className="grid grid-cols-4 gap-2">
                                    <button 
                                        className=" btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                        <KeyIcon className="h-5 w-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleDetailClick(vendor)}
                                        className=" btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                        <EyeIcon className="h-5 w-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleEditClick(vendor)}
                                        className=" btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button 
                                        className=" btn bg-transparent border-primary hover:bg-primary hover:text-white group">
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredVendors.length)} of {filteredVendors.length} entries
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
                <EditVendorModal 
                    showModal={showModal} 
                    onClose={() => setShowModal(false)} 
                    vendor={selectedVendor} 
                />
            }
            {showDetail &&
                <DetailView 
                    vendor={selectedVendor} 
                    onClose={() => setShowDetail(false)} 
                />
            }
        </>
    );
};

const DetailView = ({ vendor, onClose }) => {
    if (!vendor) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Vendor Details</h2>
                <p><strong>ID:</strong> {vendor.id}</p>
                <p><strong>Name:</strong> {vendor.name}</p>
                <p><strong>Contact:</strong> {vendor.contact}</p>
                <p><strong>Email:</strong> {vendor.email}</p>
                <p><strong>Balance:</strong> {vendor.balance}</p>
                <p><strong>Last Login At:</strong> {vendor.lastLoginAt}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default VendorAcc;
