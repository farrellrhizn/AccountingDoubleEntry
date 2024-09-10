import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import TitleCard from '../../components/Cards/TitleCard';
import EditRoleModal from './components/EditRoleModal'; // Ensure you have the correct path
import { ROLE_DATA } from '../../utils/dummyData';

const RolePage = () => {
    const [roles, setRoles] = useState(ROLE_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    const handleEditClick = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    };

    const handleDetailClick = (role) => {
        setSelectedRole(role);
        setShowDetail(true);
    };

    const filteredRoles = roles.filter(role =>
        role.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.permissions.some(permission =>
            permission.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedRoles = filteredRoles.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Roles">
                <div className="flex justify-between items-center mb-4">
                    <div className="mr-4">
                        <select
                            id="entriesPerPage"
                            className="select select-bordered"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                        <label htmlFor="entriesPerPage" className="ml-2">
                            Entries per page:
                        </label>
                    </div>
                    <div className="ml-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full min-w-max">
                        <thead>
                            <tr>
                                <th className="w-24 px-4 py-2">ROLE</th>
                                <th className="w-72 px-4 py-2">PERMISSIONS</th>
                                <th className="w-32 px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRoles.map((role, index) => (
                                <tr key={index}>
                                    <td className="align-center">{role.role}</td>
                                    <td className="align-top">
                                        <div className="flex flex-wrap gap-2">
                                            {role.permissions.map((permission, idx) => (
                                                <span key={idx} className="badge bg-purple-200 text-purple-800">
                                                    {permission}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="align-center">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEditClick(role)}
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                                            >
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <div>
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredRoles.length)} of {filteredRoles.length} entries
                    </div>
                    <button
                        onClick={handleNextPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </TitleCard>

            {showModal &&
                <EditRoleModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    role={selectedRole}
                />
            }

            {showDetail && selectedRole && (
                <DetailView
                    vendor={selectedRole}
                    onClose={() => setShowDetail(false)}
                />
            )}
        </>
    );
};

const DetailView = ({ vendor, onClose }) => {
    if (!vendor) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Vendor Details</h2>
                <p><strong>ID:</strong> {vendor.id}</p>
                <p><strong>Name:</strong> {vendor.name}</p>
                <p><strong>Contact:</strong> {vendor.contact}</p>
                <p><strong>Email:</strong> {vendor.email}</p>
                <p><strong>Balance:</strong> {vendor.balance}</p>
                <p><strong>Last Login At:</strong> {vendor.lastLoginAt}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default RolePage;
