import React, { useState, useEffect } from 'react';
import {
    ArrowDownTrayIcon, ArrowUpTrayIcon, DocumentPlusIcon, LockClosedIcon, EyeIcon, PencilIcon, TrashIcon
} from '@heroicons/react/24/outline';
import { dummyCustomerData } from "../../utils/dummyData";
import UploadCustomerModal from "./UploadCustomerModal";
import CreateCustomerModal from "./CreateCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import ViewCustomerModal from "./ViewCustomerModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

function Customers() {
    const [customers, setCustomers] = useState([]); 
    const [isCreateModalOpen, setCreateModalOpen] = useState(false); 
    const [isUploadModalOpen, setUploadModalOpen] = useState(false); 
    const [isEditModalOpen, setEditModalOpen] = useState(false); 
    const [isViewModalOpen, setViewModalOpen] = useState(false); 
    const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false); 
    const [currentCustomer, setCurrentCustomer] = useState(null); 
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 10;

    useEffect(() => {
        setCustomers(dummyCustomerData);
    }, []);

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const totalPages = Math.ceil(customers.length / customersPerPage);

    // Handler untuk download
    const handleDownload = () => {
        const dataStr = JSON.stringify(customers, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "customers.json";
        link.click();
        URL.revokeObjectURL(url);
    };

    // Handler untuk edit
    const handleEditClick = (customer) => {
        setCurrentCustomer(customer);
        setEditModalOpen(true);
    };

    // Handler untuk view
    const handleViewClick = (customer) => {
        setCurrentCustomer(customer);
        setViewModalOpen(true);
    };

    // Handler untuk delete
    const handleDeleteClick = (customerIndex) => {
        const updatedCustomers = customers.filter((_, index) => index !== customerIndex);
        setCustomers(updatedCustomers);
    };

    // Handler untuk lupa password
    const handleForgotPasswordClick = (customer) => {
        setCurrentCustomer(customer);
        setForgotPasswordModalOpen(true);
    };

    // Pagination
    const handlePageChange = (pageNumber) => {
        if (pageNumber === 'previous') {
            setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
        } else if (pageNumber === 'next') {
            setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
        } else {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Manage Customers</h1>
                <nav className="text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-700">Dashboard</a> &gt; <span>Manage Customers</span>
                </nav>
            </div>

            {/* Filter Panel */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                        <button onClick={handleDownload} className="btn bg-blue-500 text-white hover:bg-blue-700 p-2">
                            <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => setUploadModalOpen(true)} className="btn bg-blue-500 text-white hover:bg-blue-700 p-2">
                            <ArrowUpTrayIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => setCreateModalOpen(true)} className="btn bg-green-500 text-white hover:bg-green-700 p-2">
                            <DocumentPlusIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <select className="select select-bordered w-20">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="ml-2 text-sm text-gray-500">entries per page</span>
                    </div>
                    <div className="w-full sm:w-64">
                        <input type="text" className="input input-bordered w-full" placeholder="Search..." />
                    </div>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">NAME</th>
                                <th className="px-4 py-2">CONTACT</th>
                                <th className="px-4 py-2">EMAIL</th>
                                <th className="px-4 py-2">BALANCE</th>
                                <th className="px-4 py-2">LAST LOGIN</th>
                                <th className="px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCustomers.map((customer, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{customer.id}</td>
                                    <td className="border px-4 py-2">{customer.name}</td>
                                    <td className="border px-4 py-2">{customer.contact}</td>
                                    <td className="border px-4 py-2">{customer.email}</td>
                                    <td className="border px-4 py-2">{customer.balance}</td>
                                    <td className="border px-4 py-2">{customer.lastLogin}</td>
                                    <td className="border px-4 py-2">
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleForgotPasswordClick(customer)} className="btn btn-sm bg-red-500 text-white hover:bg-red-700">
                                                <LockClosedIcon className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleViewClick(customer)} className="btn btn-sm bg-gray-500 text-white hover:bg-gray-700">
                                                <EyeIcon className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleEditClick(customer)} className="btn btn-sm bg-green-500 text-white hover:bg-green-700">
                                                <PencilIcon className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleDeleteClick(index)} className="btn btn-sm bg-red-500 text-white hover:bg-red-700">
                                                <TrashIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-700">
                        Showing {indexOfFirstCustomer + 1} to {Math.min(indexOfLastCustomer, customers.length)} of {customers.length} entries
                    </div>
                    <div>
                        <nav className="inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                            <a 
                                href="#" 
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => handlePageChange('previous')}
                            >
                                &lt;
                            </a>
                            {[...Array(totalPages).keys()].map((page) => (
                                <a 
                                    key={page + 1}
                                    href="#" 
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === page + 1 ? 'text-green-500' : 'text-gray-700'} hover:bg-gray-50`}
                                    onClick={() => handlePageChange(page + 1)}
                                >
                                    {page + 1}
                                </a>
                            ))}
                            <a 
                                href="#" 
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                onClick={() => handlePageChange('next')}
                            >
                                &gt;
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isCreateModalOpen && (
                <CreateCustomerModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onCreate={(newCustomer) => setCustomers([...customers, newCustomer])}
                />
            )}

            {isUploadModalOpen && (
                <UploadCustomerModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setUploadModalOpen(false)}
                    onUpload={(newCustomers) => setCustomers([...customers, ...newCustomers])}
                />
            )}

            {isEditModalOpen && currentCustomer && (
                <EditCustomerModal
                    isOpen={isEditModalOpen}
                    customer={currentCustomer}
                    onClose={() => setEditModalOpen(false)}
                    onUpdate={(updatedCustomer) => {
                        setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
                        setEditModalOpen(false);
                    }}
                />
            )}

            {isViewModalOpen && currentCustomer && (
                <ViewCustomerModal
                    customer={currentCustomer}
                    onClose={() => setViewModalOpen(false)}
                />
            )}

            {isForgotPasswordModalOpen && currentCustomer && (
                <ForgotPasswordModal
                    customer={currentCustomer}
                    onClose={() => setForgotPasswordModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Customers;
