import React from 'react';
import { FaSearch, FaSync, FaDownload } from 'react-icons/fa';

function TaxSummary() {
    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Tax Summary</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                    <FaDownload className="mr-2"/> 
                </button>
            </div>
            
            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-500"> Report</span> &gt;
                <span className="text-gray-900"> Tax Summary</span>
            </nav>

            {/* Filter Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="w-1/4">
                    <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>2024</option>
                    </select>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                        <FaSearch className="mr-2"/> 
                    </button>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-pink-600 focus:outline-none">
                        <FaSync className="mr-2"/> 
                    </button>
                </div>
            </div>

           {/* Report Information and Duration Section */}
            <div className="bg-transparent p-4 rounded-md flex space-x-4 mb-4">
                <div className="bg-white p-4 rounded-md shadow-md w-1/2">
                    <p className="text-lg font-semibold text-left">Report: <span className="font-normal">Tax Summary</span></p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md w-1/2">
                    <p className="text-left">Duration: <span className="font-semibold">Jan-2024 to Dec-2024</span></p>
                </div>
            </div>



            {/* Income Section */}
            <div className="bg-white p-6 rounded-md shadow-md mb-4">
                <h3 className="text-xl font-semibold mb-4">Income</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                {/* Table Headers */}
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">January</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">February</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">March</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">April</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">May</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">June</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">July</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">August</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">September</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">October</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">November</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">December</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 whitespace-nowrap">CGST</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$290.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$38.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                            </tr>
                            {/* Additional rows */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Expense Section */}
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Expense</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">January</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">February</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">March</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">April</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">May</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">June</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">July</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">August</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">September</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">October</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">November</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">December</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 whitespace-nowrap">CGST</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$290.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$38.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                                <td className="py-2 whitespace-nowrap">$0.00</td>
                            </tr>
                            {/* Additional rows */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TaxSummary;