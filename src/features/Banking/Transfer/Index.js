import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync } from 'react-icons/fa';
import CreateTransferModal from './CreateTransferModal';
import EditTransferModal from './EditTransferModal';

function ManageTransfer() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTransfer, setSelectedTransfer] = useState(null); // For editing

    const handleCreateClick = () => {
        setIsCreateModalOpen(true);
    };

    const handleEditClick = (transfer) => {
        setSelectedTransfer(transfer);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        // Logic for deleting a transfer item
        console.log(`Deleting transfer with id: ${id}`);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Transfer</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={handleCreateClick}
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-900"> Transfer</span>
            </nav>

            {/* Filter Section */}
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">From Account</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Account</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">To Account</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Account</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-6">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none flex items-center">
                        <FaSearch />
                    </button>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm ml-2 hover:bg-pink-600 focus:outline-none flex items-center">
                        <FaSync />
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-md shadow-md mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Account</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Account</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example Data Row */}
                            <tr>
                                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                                <td className="py-2 whitespace-nowrap">Keire</td>
                                <td className="py-2 whitespace-nowrap">Insurance</td>
                                <td className="py-2 whitespace-nowrap">$1,500</td>
                                <td className="py-2 whitespace-nowrap">#REF1234</td>
                                <td className="py-2 whitespace-nowrap">Payment for insurance</td>
                                <td className="py-2 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEditClick({ id: 1, date: 'Aug 17, 2022', fromAccount: 'Keire', toAccount: 'Insurance', amount: 1500 })}
                                            className="bg-blue-500 text-white p-2 rounded-md"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(1)}
                                            className="bg-pink-500 text-white p-2 rounded-md"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 13 entries
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isCreateModalOpen && <CreateTransferModal onClose={() => setIsCreateModalOpen(false)} />}
            {isEditModalOpen && <EditTransferModal transfer={selectedTransfer} onClose={() => setIsEditModalOpen(false)} />}
        </div>
    );
}

export default ManageTransfer;
