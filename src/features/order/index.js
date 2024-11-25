// src/features/orders/OrderPage.jsx

import React, { useState, useEffect } from 'react';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon';
import EditOrderModal from './components/EditOrderModal';
import DeleteConfirmModal from './components/DeleteConfirmModal'; // Import DeleteConfirmModal
import TitleCard from '../../components/Cards/TitleCard';
import { ORDER_DATA } from '../../utils/dummyData';
import { useDispatch } from 'react-redux';
import { showNotification } from '../common/headerSlice';

const OrderPage = () => {
    const dispatch = useDispatch();
    const [orderData, setOrderData] = useState(ORDER_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    // State untuk modal delete
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    const handleEditClick = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleDetailClick = (order) => {
        setSelectedOrder(order);
        setShowDetail(true);
    };

    const handleDeleteClick = (order) => {
        setOrderToDelete(order);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        if (orderToDelete) {
            // Menghapus order dari orderData
            setOrderData((prevData) =>
                prevData.filter((order) => order.order_id !== orderToDelete.order_id)
            );

            // Menampilkan notifikasi
            dispatch(
                showNotification({
                    message: `Order "${orderToDelete.order_id}" has been successfully deleted.`,
                    status: 1, // Asumsi status 1 adalah untuk sukses
                })
            );

            // Menutup modal delete
            setShowDeleteModal(false);
            setOrderToDelete(null);
        }
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
        setOrderToDelete(null);
    };

    // Handler untuk menyimpan perubahan dari EditOrderModal
    const handleSaveOrder = (updatedOrder) => {
        setOrderData((prevData) =>
            prevData.map((order) =>
                order.order_id === updatedOrder.order_id ? updatedOrder : order
            )
        );

        // Menampilkan notifikasi
        dispatch(
            showNotification({
                message: `Order "${updatedOrder.order_id}" has been successfully updated.`,
                status: 1, // Asumsi status 1 adalah untuk sukses
            })
        );
    };

    const filteredOrders = orderData.filter(order =>
        order.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.plan_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.payment_type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage, searchTerm]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedOrders = filteredOrders.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Function to determine the status class
    const getStatusClass = (status) => {
        switch (status) {
            case 'Approved':
                return 'bg-green-500';
            case 'Success':
                return 'bg-blue-500';
            case 'Succeeded':
                return 'bg-indigo-500';
            case 'Pending':
                return 'bg-orange-500';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Orders">
                {/* Kontrol Atas Responsif */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                    {/* Entries per page */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="entriesPerPage" className="text-sm md:text-base">
                            Entries per page:
                        </label>
                        <select
                            id="entriesPerPage"
                            className="select select-bordered w-24"
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
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Tabel Responsif */}
                <div className="overflow-x-auto">
                    <table className="table w-full min-w-max">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PLAN NAME</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRICE</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PAYMENT TYPE</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COUPON</th>
                                <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">INVOICE</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paginatedOrders.length > 0 ? (
                                paginatedOrders.map((order) => (
                                    <tr key={order.order_id}>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.order_id}</td>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.date}</td>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.name}</td>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.plan_name}</td>
                                        <td className="px-4 py-2 text-sm md:text-base">
                                            {typeof order.price === 'string' && order.price.startsWith('USD') 
                                                ? `$${parseFloat(order.price.slice(3)).toLocaleString()}`
                                                : order.price || '-'}
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.payment_type}</td>
                                        <td className="px-4 py-2">
                                            <span
                                                className={`flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(order.status)}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 text-sm md:text-base">{order.coupon || '-'}</td>
                                        <td className="px-4 py-2 text-center">
                                            {order.invoice && order.invoice !== '-' ? (
                                                <a href={order.invoice} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                    View Invoice
                                                </a>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="px-4 py-2 text-center text-gray-500">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination dan Informasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
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

            {/* Modal Edit Order */}
            {showModal && (
                <EditOrderModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    order={selectedOrder}
                    onSave={handleSaveOrder} // Pass onSave handler
                />
            )}

            {/* Modal Detail Order */}
            {showDetail && (
                <DetailView
                    order={selectedOrder}
                    onClose={() => setShowDetail(false)}
                />
            )}

            {/* Modal Delete Confirm */}
            {showDeleteModal && (
                <DeleteConfirmModal
                    onConfirm={handleDeleteConfirm}
                    onCancel={handleDeleteCancel}
                />
            )}
        </>
    );};

// Komponen DetailView yang Diperbaiki
const DetailView = ({ order, onClose }) => {
    if (!order) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h2 className="text-xl font-bold mb-4">Order Details</h2>
                <p className="mb-2"><strong>Order ID:</strong> {order.order_id}</p>
                <p className="mb-2"><strong>Date:</strong> {order.date}</p>
                <p className="mb-2"><strong>Name:</strong> {order.name}</p>
                <p className="mb-2"><strong>Plan Name:</strong> {order.plan_name}</p>
                <p className="mb-2"><strong>Price:</strong> {typeof order.price === 'number' ? `$${order.price.toFixed(2)}` : order.price || '-'}</p>
                <p className="mb-2"><strong>Payment Type:</strong> {order.payment_type}</p>
                <p className="mb-2"><strong>Status:</strong> 
                    <span
                        className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 ${getStatusClass(order.status)}`}
                    >
                        {order.status}
                    </span>
                </p>
                <p className="mb-2"><strong>Coupon:</strong> {order.coupon || '-'}</p>
                <p className="mb-2"><strong>Invoice:</strong> 
                    {order.invoice && order.invoice !== '-' ? (
                        <a href={order.invoice} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            View Invoice
                        </a>
                    ) : (
                        '-'
                    )}
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 btn bg-primary text-white hover:bg-secondary w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// Fungsi getStatusClass harus didefinisikan di luar DetailView atau dijadikan prop
// Untuk kemudahan, definisikan ulang di sini atau pass sebagai prop
const getStatusClass = (status) => {
    switch (status) {
        case 'Pending':
            return 'bg-yellow-400';
        case 'Active':
            return 'bg-green-400';
        case 'Inactive':
            return 'bg-red-400';
        default:
            return 'bg-gray-400';
    }
};

export default OrderPage;
