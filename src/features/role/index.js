import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import TitleCard from '../../components/Cards/TitleCard';
import EditRoleModal from './components/EditRoleModal'; // Pastikan path sudah benar
import DeleteConfirmModal from './components/DeleteConfirmModal'; // Import modal konfirmasi penghapusan
import { ROLE_DATA } from '../../utils/dummyData';
import { Tooltip } from 'react-tooltip'; // Pastikan untuk menginstal react-tooltip
import 'react-tooltip/dist/react-tooltip.css'; // Import CSS react-tooltip
import { showNotification } from "../common/headerSlice";

const RolePage = () => {
    const dispatch = useDispatch(); // Inisialisasi dispatch
    const [roles, setRoles] = useState(ROLE_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    
    // State untuk modal konfirmasi penghapusan
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);

    const handleEditClick = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    };

    // Ubah handleDetailClick menjadi handleDeleteClick
    const handleDeleteClick = (role) => {
        setRoleToDelete(role);
        setShowDeleteModal(true);
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

    // Fungsi untuk menghapus role setelah konfirmasi
    const handleConfirmDelete = () => {
        if (roleToDelete) {
            setRoles(prevRoles => prevRoles.filter(role => role.id !== roleToDelete.id));
            setShowDeleteModal(false);
            setRoleToDelete(null);

            // Dispatch notifikasi penghapusan berhasil
            dispatch(
                showNotification({
                    message: `Role "${roleToDelete.role}" has been successfully deleted!`,
                    status: 1, // 1 untuk sukses
                })
            );
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setRoleToDelete(null);
    };

    // Fungsi untuk mengupdate role setelah edit
    const handleUpdateRole = (updatedRole) => {
        setRoles(prevRoles => prevRoles.map(role => role.id === updatedRole.id ? updatedRole : role));

        // Dispatch notifikasi pembaruan berhasil
        dispatch(
            showNotification({
                message: `Role "${updatedRole.role}" has been successfully updated!`,
                status: 1, // 1 untuk sukses
            })
        );

        setShowModal(false);
        setSelectedRole(null);
    };

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Roles">
                {/* Kontrol Responsif untuk Entries dan Search */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    {/* Entries Per Page */}
                    <div className="flex items-center w-full md:w-auto">
                        <label htmlFor="entriesPerPage" className="mr-2 text-sm">
                            Entries per page:
                        </label>
                        <select
                            id="entriesPerPage"
                            className="select select-bordered text-sm w-full md:w-auto"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    {/* Search Bar */}
                    <div className="w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-full text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Tabel Responsif */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="px-2 py-2 text-left">ROLE</th>
                                <th className="px-2 py-2 text-left">PERMISSIONS</th>
                                <th className="px-2 py-2 text-center">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRoles.map((role) => (
                                <tr key={role.id} className="text-sm">
                                    <td className="px-2 py-2 truncate" title={role.role}>
                                        {role.role}
                                    </td>
                                    <td className="px-2 py-2">
                                        <div className="flex flex-wrap gap-1">
                                            {role.permissions.slice(0, 3).map((permission, idx) => (
                                                <span key={idx} className="badge bg-purple-200 text-purple-800 text-xs">
                                                    {permission}
                                                </span>
                                            ))}
                                            {role.permissions.length > 3 && (
                                                <>
                                                    <span
                                                        className="badge bg-purple-200 text-purple-800 text-xs cursor-pointer"
                                                        data-tooltip-id={`permission-tooltip-${role.id}`}
                                                        data-tooltip-content={role.permissions.slice(3).join(', ')}
                                                    >
                                                        +{role.permissions.length - 3}
                                                    </span>
                                                    <Tooltip id={`permission-tooltip-${role.id}`} place="top" effect="solid" />
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 text-center">
                                        <div className="flex justify-center space-x-2">
                                            <button
                                                onClick={() => handleEditClick(role)}
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2"
                                                aria-label="Edit Role"
                                            >
                                                <PencilIcon className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(role)}
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2"
                                                aria-label="Delete Role"
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination dan Informasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredRoles.length)} of {filteredRoles.length} entries
                    </div>
                    {/* Kontrol Pagination */}
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePrevPage}
                            className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            className={`btn bg-primary text-white hover:bg-secondary ${currentPage === totalPages || totalPages === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>
                </div>

            </TitleCard>

            {/* Modal Edit Role */}
            {showModal &&
                <EditRoleModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    role={selectedRole}
                    onUpdate={handleUpdateRole} // Tambahkan prop onUpdate
                />
            }

            {/* Detail View */}
            {showDetail && selectedRole && (
                <DetailView
                    role={selectedRole}
                    onClose={() => setShowDetail(false)}
                />
            )}

            {/* Modal Konfirmasi Penghapusan */}
            {showDeleteModal && roleToDelete && (
                <DeleteConfirmModal
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </>
    ); // Menutup pernyataan return
}; // Menutup fungsi RolePage

// DetailView Component
const DetailView = ({ role, onClose }) => {
    if (!role) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
                <h2 className="text-xl font-bold mb-4">Role Details</h2>
                <p className="text-sm"><strong>ID:</strong> {role.id}</p>
                <p className="text-sm"><strong>Role:</strong> {role.role}</p>
                <p className="text-sm"><strong>Permissions:</strong></p>
                <ul className="list-disc list-inside text-sm">
                    {role.permissions.map((permission, idx) => (
                        <li key={idx}>{permission}</li>
                    ))}
                </ul>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default RolePage;
