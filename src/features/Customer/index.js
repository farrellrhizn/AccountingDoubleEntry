import React, { useState } from 'react';
import {
    ArrowDownTrayIcon, ArrowUpTrayIcon, LockClosedIcon, EyeIcon, PencilIcon, DocumentPlusIcon
} from '@heroicons/react/24/outline';
import UploadCustomerModal from "./UploadCustomerModal";
import CreateCustomerModal from "./CreateCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import ViewCustomerModal from "./ViewCustomerModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

function Customers() {
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: "John Doe",
            contact: "123456789",
            email: "john.doe@example.com",
            balance: "$500.00",
            lastLogin: "2024-12-01 14:32"
        },
        {
            id: 2,
            name: "Jane Smith",
            contact: "987654321",
            email: "jane.smith@example.com",
            balance: "$1,200.00",
            lastLogin: "2024-12-05 10:15"
        },
        {
            id: 3,
            name: "Alice Johnson",
            contact: "456789123",
            email: "alice.johnson@example.com",
            balance: "$350.00",
            lastLogin: "2024-12-10 16:45"
        }
    ]);

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isUploadModalOpen, setUploadModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 10;

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const totalPages = Math.ceil(customers.length / customersPerPage);

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

    const handleViewClick = (customer) => {
        setCurrentCustomer(customer);
        setViewModalOpen(true);
    };

    const handleEditClick = (customer) => {
        setCurrentCustomer(customer);
        setEditModalOpen(true);
    };

    const handleForgotPasswordClick = (customer) => {
        setCurrentCustomer(customer);
        setForgotPasswordModalOpen(true);
    };

    const handleAddCustomer = (newCustomer) => {
        setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
        setCreateModalOpen(false);
    };

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
                        <button onClick={() => setCreateModalOpen(true)} className="btn bg-green-500 text-white hover:bg-green-700 p-2">
                            <DocumentPlusIcon className="w-5 h-5" />
                        </button>
                        <button onClick={handleDownload} className="btn bg-blue-500 text-white hover:bg-blue-700 p-2">
                            <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => setUploadModalOpen(true)} className="btn bg-blue-500 text-white hover:bg-blue-700 p-2">
                            <ArrowUpTrayIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow p-4">
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
                                            <button onClick={() => handleEditClick(customer)} className="btn btn-sm bg-green-500 text-white hover:bg-green-700">
                                                <PencilIcon className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleForgotPasswordClick(customer)} className="btn btn-sm bg-red-500 text-white hover:bg-red-700">
                                                <LockClosedIcon className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleViewClick(customer)} className="btn btn-sm bg-gray-500 text-white hover:bg-gray-700">
                                                <EyeIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            {isCreateModalOpen && (
                <CreateCustomerModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleAddCustomer}
                />
            )}
            {isEditModalOpen && currentCustomer && (
                <EditCustomerModal
                    isOpen={isEditModalOpen}
                    customer={currentCustomer}
                    onClose={() => setEditModalOpen(false)}
                />
            )}
            {isUploadModalOpen && (
                <UploadCustomerModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setUploadModalOpen(false)}
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
