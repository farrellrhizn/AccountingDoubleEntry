import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync } from 'react-icons/fa';
import ViewRetainerModal from './ViewRetainerModal';
import EditRetainerModal from './EditRetainerModal';
import CreateRetainerModal from './CreateRetainerModal';

function ManageRetainers() {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [retainerData, setRetainerData] = useState(null);

    const tableData = [
        { id: 1, retainer: '#RET00001', customer: 'Keire', category: 'Insurance', issueDate: 'Aug 17, 2022', status: 'Partially Paid' },
        // Add more rows here
    ];

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + tableData.map(e => `${e.retainer},${e.customer},${e.category},${e.issueDate},${e.status}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "retainers_data.csv");
        document.body.appendChild(link);
        link.click();
    };

    const handleView = (data) => {
        setRetainerData(data);
        setShowViewModal(true);
    };

    const handleEdit = (data) => {
        setRetainerData(data);
        setShowEditModal(true);
    };

    const handleCreate = () => {
        setShowCreateModal(true);
    };

    const handleDuplicate = (data) => {
        console.log('Duplicate retainer:', data);
    };

    const handleDelete = (data) => {
        console.log('Delete retainer:', data);
    };

    return (
        <div className="p-4 md:p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                <h2 className="text-xl md:text-2xl font-bold">Manage Retainers</h2>
                <div className="flex space-x-2">
                    <button onClick={handleExport} className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                        <FaFileExport />
                    </button>
                    <button onClick={handleCreate} className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                        <FaPlus />
                    </button>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt;
                <span className="text-gray-900"> Retainers</span>
            </nav>

            {/* Filter Section */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customer</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Customer</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Select Status</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                    <button className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                        <FaSearch />
                    </button>
                    <button className="bg-pink-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none">
                        <FaSync />
                    </button>
                </div>
            </div>

            {/* Table and Pagination Section */}
            <div className="bg-white p-4 md:p-6 rounded-md shadow-md mb-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retainer</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tableData.map((row) => (
                                <tr key={row.id}>
                                    <td className="py-2 whitespace-nowrap"><span className="text-green-600">{row.retainer}</span></td>
                                    <td className="py-2 whitespace-nowrap">{row.customer}</td>
                                    <td className="py-2 whitespace-nowrap">{row.category}</td>
                                    <td className="py-2 whitespace-nowrap">{row.issueDate}</td>
                                    <td className="py-2 whitespace-nowrap">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">{row.status}</span>
                                    </td>
                                    <td className="py-2 whitespace-nowrap">
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleView(row)} className="bg-green-500 text-white px-2 py-1 rounded-md"><FaEye /></button>
                                            <button onClick={() => handleDuplicate(row)} className="bg-gray-500 text-white px-2 py-1 rounded-md"><FaCopy /></button>
                                            <button onClick={() => handleEdit(row)} className="bg-blue-500 text-white px-2 py-1 rounded-md"><FaEdit /></button>
                                            <button onClick={() => handleDelete(row)} className="bg-pink-500 text-white px-2 py-1 rounded-md"><FaTrash /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

            {/* Modals */}
            {showViewModal && <ViewRetainerModal data={retainerData} onClose={() => setShowViewModal(false)} />}
            {showEditModal && <EditRetainerModal data={retainerData} onClose={() => setShowEditModal(false)} />}
            {showCreateModal && <CreateRetainerModal onClose={() => setShowCreateModal(false)} />}
        </div>
    );
}

export default ManageRetainers;
