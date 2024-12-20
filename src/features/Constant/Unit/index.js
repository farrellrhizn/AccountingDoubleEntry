import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import CreateUnitModal from './CreateUnitModal';
import EditUnitModal from './EditUnitModal';

function Unit() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(null);

    // Handler untuk membuka modal Create
    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    // Handler untuk membuka modal Edit
    const openEditModal = (unit) => {
        setSelectedUnit(unit);
        setIsEditModalOpen(true);
    };

    // Handler untuk menutup modal
    const closeModal = () => {
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedUnit(null);
    };
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Unit</h2>
                <div className="flex space-x-2">
                <button 
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none"
                        onClick={openCreateModal}
                    >
                        <FaPlus className="mr-2" />
                    </button>
                </div>
            </div>
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-900"> Unit</span>
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
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 whitespace-nowrap">Cost</td>
                                <td className="py-2 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button 
                                            className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                            onClick={() => openEditModal("Cost")}
                                        >
                                            <FaEdit />
                                        </button>
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
                </div>
            </div>
            {/* Modals */}
            {isCreateModalOpen && <CreateUnitModal onClose={closeModal} />}
            {isEditModalOpen && <EditUnitModal unit={selectedUnit} onClose={closeModal} />}
        </div>
    );
}

export default Unit;
