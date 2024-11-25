import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync, FaFileDownload } from 'react-icons/fa';
import CreateRevenueModal from './CreateRevenueModal';
import ViewRevenueModal from './ViewRevenueModal';
import EditRevenueModal from './EditRevenueModal';

function ManageRevenue() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [revenueData, setRevenueData] = useState(null);

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  const handleView = (data) => {
    setRevenueData(data);
    setShowViewModal(true);
  };

  const handleEdit = (data) => {
    setRevenueData(data);
    setShowEditModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Revenue</h2>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
            <FaFileExport className="mr-2" />
          </button>
          <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
            <FaPlus className="mr-2" />
          </button>
        </div>
      </div>
      <nav className="text-sm mb-6">
        <span className="text-gray-500">Dashboard</span> &gt;
        <span className="text-gray-900"> Revenue</span>
      </nav>

      {/* Filter Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <label className="block text-sm font-medium text-gray-700">Customer</label>
            <select
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Select Customer</option>
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
        <div className="flex flex-wrap justify-between items-center mt-6">
          <div></div>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none flex items-center">
              <FaSearch className="mr-2" />
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none flex items-center">
              <FaSync className="mr-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-md shadow-md mt-6">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <select
              className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="ml-2 text-sm text-gray-700">entries per page</span>
          </div>
          <div className="mt-2 sm:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Receipt</th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="py-2 whitespace-nowrap"><span className="text-green-600">#RET00001</span></td>
                <td className="py-2 whitespace-nowrap">$1000</td>
                <td className="py-2 whitespace-nowrap">Insurance</td>
                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                <td className="py-2 whitespace-nowrap">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Partially Paid</span>
                </td>
                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                <td className="py-2 whitespace-nowrap">Insurance</td>
                <td className="py-2 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md"><FaFileDownload /></button>
                    <button onClick={() => handleView({ amount: '$1000' })} className="bg-pink-500 text-white px-2 py-1 rounded-md">
                      <FaEye />
                    </button>
                  </div>
                </td>
                <td className="py-2 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit({ amount: '$1000' })} className="bg-blue-500 text-white px-2 py-1 rounded-md">
                      <FaEdit />
                    </button>
                    <button className="bg-pink-500 text-white px-2 py-1 rounded-md"><FaTrash /></button>
                  </div>
                </td>
              </tr>
              {/* Repeat above <tr> block for more rows */}
            </tbody>
          </table>

          {/* Modals */}
          {showCreateModal && <CreateRevenueModal onClose={() => setShowCreateModal(false)} />}
          {showViewModal && <ViewRevenueModal data={revenueData} onClose={() => setShowViewModal(false)} />}
          {showEditModal && <EditRevenueModal data={revenueData} onClose={() => setShowEditModal(false)} />}
        </div>
      

                {/* Pagination Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 13 entries
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageRevenue;
