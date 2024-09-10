import React from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync } from 'react-icons/fa'; // Import ikon yang diperlukan

function ManageRetainers() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Retainers</h2>
                <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                        <FaFileExport />
                    </button>
                    <button className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                        <FaPlus />
                    </button>
                </div>
            </div>

            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt;
                <span className="text-gray-900"> Retainers</span>
            </nav>

            {/* Filter Section */}
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
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

            {/* Pagination, Search, and Table */}
            <div className="bg-white p-6 rounded-md shadow-md mt-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                    <div className="w-full md:w-auto flex justify-between md:block">
                        <select className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-auto">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="ml-2 text-sm text-gray-700 hidden md:inline">entries per page</span>
                    </div>
                    <div className="w-full md:w-auto">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full" 
                        />
                    </div>
                    <span className="text-sm text-gray-700 md:hidden">entries per page</span>
                </div>

                {/* Table Section */}
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
                                        <button className="bg-green-500 text-white px-2 py-1 rounded-md"><FaEye /></button>
                                        <button className="bg-gray-500 text-white px-2 py-1 rounded-md"><FaCopy /></button>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md"><FaEdit /></button>
                                        <button className="bg-pink-500 text-white px-2 py-1 rounded-md"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            {/* Repeat above <tr> block for more rows */}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 13 entries
                    </div>
                    <div>
                        <nav className="inline-flex shadow-sm -space-x-px" aria-label="Pagination">
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
        </div>
    );
}

export default ManageRetainers;
