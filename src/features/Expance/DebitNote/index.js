import React, { useState } from 'react';
import { FaEye, FaCopy, FaEdit, FaTrash, FaPlus, FaFileExport, FaSearch, FaSync } from 'react-icons/fa'; // Import ikon yang diperlukan
import CreateModal from './CreateModal'; // Import modal create
import EditModal from './EditModal'; 


function ManageDebitNote() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openCreateModal = () => setIsCreateModalOpen(true);
    const closeCreateModal = () => setIsCreateModalOpen(false);

    const openEditModal = (item) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => setIsEditModalOpen(false);

    const handleEditClick = (item) => {
        openEditModal(item);
    };
    return (
        <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-0">Manage Debit Note</h2>
                <div className="flex space-x-2">
                    <button onClick={openCreateModal} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                        <FaPlus className="mr-2" />
                    </button>
                </div>
            </div>

            <nav className="text-sm mb-4 sm:mb-6">
                <span className="text-gray-500">Dashboard</span> &gt;
                <span className="text-gray-900"> Debit Note</span>
            </nav>

            <div className="bg-white p-4 sm:p-6 rounded-md shadow-md">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                        <select className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="text-sm text-gray-700">entries per page</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                        />
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Bill</th>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 whitespace-nowrap"><span className="text-green-600">#RET00001</span></td>
                                <td className="py-2 whitespace-nowrap">Keire</td>
                                <td className="py-2 whitespace-nowrap">Aug 17, 2022</td>
                                <td className="py-2 whitespace-nowrap">$100.00</td>
                                <td className="py-2 whitespace-nowrap">Lorem ipsum dolor sit amet...</td>
                                <td className="py-2 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleEditClick({ id: 1 })} className="bg-blue-500 text-white px-2 py-1 rounded-md"><FaEdit /></button>
                                        <button className="bg-pink-500 text-white px-2 py-1 rounded-md"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                            {/* Repeat above <tr> block for more rows */}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
                    <div className="text-sm text-gray-700">
                        Showing 1 to 10 of 13 entries
                    </div>
                </div>
            </div>
         {/* Modals */}
         {isCreateModalOpen && <CreateModal onClose={closeCreateModal} />}
         {isEditModalOpen && <EditModal item={selectedItem} onClose={closeEditModal} />}
     </div>
    );
}

export default ManageDebitNote;
