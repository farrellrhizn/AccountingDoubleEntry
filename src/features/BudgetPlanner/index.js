import React, { useState } from 'react';
import { FunnelIcon, TrashIcon, PlusIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, DocumentPlusIcon, LockClosedIcon, EyeIcon, PencilIcon } from '@heroicons/react/24/outline';

import ViewModal from './ViewModal'; 
import EditModal from './EditModal'; 
import CreateModal from './CreateModal';

function BudgetPlanners() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCreate = () => {
        setIsCreateModalOpen(true);
    };

    const handleView = (item) => {
        setSelectedItem(item);
        setIsViewModalOpen(true);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };

    const closeCreateModal = () => setIsCreateModalOpen(false);
    const closeViewModal = () => setIsViewModalOpen(false);
    const closeEditModal = () => setIsEditModalOpen(false);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Manage Budget Planners</h1>
                <nav className="text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-700">Dashboard</a> &gt; <span>Budget Planner</span>
                </nav>
            </div>

            {/* Filter Panel */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                    {/* Buttons Import, Export, Create */}
                    <div className="flex space-x-2">
                        <button className="btn bg-green-500 text-white hover:bg-green-700 p-2" onClick={handleCreate}>
                            <DocumentPlusIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Data Table */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <select className="select select-bordered w-20">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="ml-2 text-sm text-gray-500">entries per page</span>
                    </div>
                    <div className="w-full sm:w-64">
                        <input type="text" className="input input-bordered w-full" placeholder="Search..." />
                    </div>
                </div>

                {/* Wrapper for Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">NAME</th>
                                <th className="px-4 py-2">FROM</th>
                                <th className="px-4 py-2">BUDGET PERIOD</th>
                                <th className="px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Bicycle parts</td>
                                <td className="border px-4 py-2">BC001CLE</td>
                                <td className="border px-4 py-2">$150.00</td>
                                <td className="border px-4 py-2">
                                    <div className="flex space-x-2">
                                        <button className="btn btn-sm bg-gray-500 text-white hover:bg-gray-700" onClick={() => handleView({name: 'Sample Item', from: 'Sample Source', budget: '2024'})}>
                                            <EyeIcon className="w-5 h-5" />
                                        </button>
                                        <button className="btn btn-sm bg-green-500 text-white hover:bg-green-700" onClick={() => handleEdit({name: 'Sample Item', from: 'Sample Source', budget: '2024'})}>
                                            <PencilIcon className="w-5 h-5" />
                                        </button>
                                        <button className="btn btn-sm bg-red-500 text-white hover:bg-red-700">
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Tambahkan lebih banyak baris di sini jika diperlukan */}
                        </tbody>
                    </table>
                </div>
                 {/* Modals */}
            {isCreateModalOpen && <CreateModal onClose={closeCreateModal} />}
            {isViewModalOpen && <ViewModal item={selectedItem} onClose={closeViewModal} />}
            {isEditModalOpen && <EditModal item={selectedItem} onClose={closeEditModal} />}
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
    );
}

export default BudgetPlanners;
