import React from 'react';
import { FaFileExport } from 'react-icons/fa'; // Import ikon yang diperlukan

function ProductStock() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Product Stock</h2>
                <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                        <FaFileExport className="mr-2"/>
                    </button>
                </div>
            </div>
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-900"> Product Stock</span>
            </nav>
            <div className="bg-white p-6 rounded-md shadow-md mt-6">
                {/* Flex container for search and entries per page */}
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

                {/* Table with horizontal scroll */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                {/* <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 whitespace-nowrap"><span className="text-green-600">#RET00001</span></td>
                                <td className="py-2 whitespace-nowrap">Keire</td>
                                <td className="py-2 whitespace-nowrap">Insurance</td>
                                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                                <td className="py-2 whitespace-nowrap">loren ipsum dolor sit amet consectetur adipisicing</td>
                            </tr>
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

export default ProductStock;
