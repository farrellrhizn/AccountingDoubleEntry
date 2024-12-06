import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync, FaDownload } from 'react-icons/fa';
import CreateModal from './CreateModal';
import EditPaymentModal  from './EditModal';

function Payment() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null); 

    const handleViewClick = (payment) => {
        setSelectedPayment(payment);
    };

    const handleEditClick = (payment) => {
        setSelectedPayment(payment); 
        setShowEditModal(true); 
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Payment</h2>
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
                <span className="text-gray-900"> Payment</span>
            </nav>

           {/* Filter Section */}
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                    type="date"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Account</label>
                    <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option>Select Account</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Vendor</label>
                    <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option>Select Vendor</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option>Select Category</option>
                    </select>
                </div>
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none flex items-center">
                    <FaSearch className="mr-2" />
                    Search
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none flex items-center">
                    <FaSync className="mr-2" />
                    Reset
                </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-6 rounded-md shadow-md mt-6">
                <div className="flex justify-between items-center mb-4">
                <div>
                    <select className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    </select>
                    <span className="ml-2 text-sm text-gray-700">entries per page</span>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Payment Receipt</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2">Jul 8, 2020</td>
                        <td className="px-4 py-2">$500.00</td>
                        <td className="px-4 py-2">ROUND BANK Benjamin Adams</td>
                        <td className="px-4 py-2">Anthony B Renfroe</td>
                        <td className="px-4 py-2">Accounts payable</td>
                        <td className="px-4 py-2">Teresa R McRae</td>
                        <td className="px-4 py-2">Neque voluptate sit</td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                                <FaDownload />
                            </button>
                            <button className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
                                <FaEye />
                            </button>
                        </div>
                        </td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button onClick={() => handleEditClick({ date: 'Jul 8, 2020', amount: 500, account: 'ROUND BANK', vendor: 'Anthony B', category: 'Accounts payable' })} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                                        <FaEdit />
                            </button>
                            <button className="bg-pink-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none">
                            <FaTrash />
                            </button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Jul 8, 2020</td>
                        <td className="px-4 py-2">$1000.00</td>
                        <td className="px-4 py-2">ROUND BANK Benjamin Adams</td>
                        <td className="px-4 py-2">Anthony B Renfroe</td>
                        <td className="px-4 py-2">- </td>
                        <td className="px-4 py-2">Ida F. Mullen</td>
                        <td className="px-4 py-2">Dignissimos et beata</td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                                <FaDownload />
                            </button>
                            <button className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
                                <FaEye />
                            </button>
                        </div>
                        </td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button onClick={() => handleEditClick({ date: 'Jul 8, 2020', amount: 500, account: 'ROUND BANK', vendor: 'Anthony B', category: 'Accounts payable' })} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                                        <FaEdit />
                            </button>
                            <button className="bg-pink-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none">
                            <FaTrash />
                            </button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Jul 10, 2020</td>
                        <td className="px-4 py-2">$6000.00</td>
                        <td className="px-4 py-2">RUS BANK, NA Earl Hane MD</td>
                        <td className="px-4 py-2">Anthony B Renfroe</td>
                        <td className="px-4 py-2">- </td>
                        <td className="px-4 py-2">Self</td>
                        <td className="px-4 py-2">Vero quae deleniti I</td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none">
                                <FaDownload />
                            </button>
                            <button className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
                                <FaEye />
                            </button>
                        </div>
                        </td>
                        <td className="px-4 py-2">
                        <div className="flex space-x-2">
                            <button onClick={() => handleEditClick({ date: 'Jul 8, 2020', amount: 500, account: 'ROUND BANK', vendor: 'Anthony B', category: 'Accounts payable' })} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                                        <FaEdit />
                            </button>
                            <button className="bg-pink-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none">
                            <FaTrash />
                            </button>
                        </div>
                        </td>
                    </tr>
                        </tbody>
                    </table>
                {/* Modals */}
                {showCreateModal && <CreateModal onClose={() => setShowCreateModal(false)} />}
                {showEditModal && (
                    <EditPaymentModal
                        item={selectedPayment} 
                        onClose={() => setShowEditModal(false)}
                    />
                )}
            </div>
        </div>
    </div>
);
}

export default Payment;
