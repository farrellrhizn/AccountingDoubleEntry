import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync } from 'react-icons/fa';
import CreateBillModal from './CreateBillModal';
import ViewBillModal from './ViewBillModal';
import EditBillModal from './EditBillModal';

function ManageBill() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);

    const handleViewClick = (bill) => {
        setSelectedBill(bill);
        setShowViewModal(true);
    };

    const handleEditClick = (bill) => {
        setSelectedBill(bill);
        setShowEditModal(true);
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Bill</h2>
                <div className="mt-2 sm:mt-0 flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                        <FaFileExport className="mr-2" />
                    </button>
                    <button onClick={() => setShowCreateModal(true)} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                        <FaPlus className="mr-2" />
                    </button>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-900"> Bill</span>
            </nav>

            {/* Filter Section */}
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vendor</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Vendor</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Status</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end mt-6 space-x-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none flex items-center">
                        <FaSearch className="mr-2" />
                    </button>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none flex items-center">
                        <FaSync className="mr-2" />
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-md shadow-md mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div className="mb-2 sm:mb-0">
                        <select className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="ml-2 text-sm text-gray-700">entries per page</span>
                    </div>
                    <div>
                        <input type="text" placeholder="Search..." className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>

                {/* Make table scrollable */}
                <div className="max-h-80 overflow-y-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill Date</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example Row */}
                            <tr>
                                <td className="py-2 whitespace-nowrap"><span className="text-green-600">#RET00001</span></td>
                                <td className="py-2 whitespace-nowrap">Keire</td>
                                <td className="py-2 whitespace-nowrap">Insurance</td>
                                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                                <td className="py-2 whitespace-nowrap">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Partially Paid</span>
                                </td>
                                <td className="py-2 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                    <button onClick={() => handleViewClick({id: 1})} className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
                                        <FaEye />
                                    </button>
                                        <button className="bg-gray-500 text-white px-2 py-1 rounded-md"><FaCopy /></button>
                                        <button onClick={() => handleEditClick({id: 1})} className="bg-yellow-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none mx-2">
                                            <FaEdit />
                                        </button>
                                        <button className="bg-pink-500 text-white px-2 py-1 rounded-md"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                {/* Modals */}
                {showCreateModal && <CreateBillModal onClose={() => setShowCreateModal(false)} />}
                {showViewModal && <ViewBillModal data={selectedBill} onClose={() => setShowViewModal(false)} />}
                {showEditModal && <EditBillModal data={selectedBill} onClose={() => setShowEditModal(false)} />}
            </div>

                {/* Pagination Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 13 entries
                    </div>
                    <nav className="inline-flex shadow-sm -space-x-px mt-2 sm:mt-0">
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            &lt;
                        </a>
                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            1
                        </a>
                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            2
                        </a>
                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            3
                        </a>
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            &gt;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default ManageBill;
