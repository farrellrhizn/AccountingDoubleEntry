import React, { useState, useEffect } from 'react';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import EditOrderModal from './components/EditOrderModal';
import TitleCard from '../../components/Cards/TitleCard';
import { ORDER_DATA } from '../../utils/dummyData';
import { DocumentIcon } from '@heroicons/react/24/outline';

const OrderPage = () => {
    const [orderData, setOrderData] = useState(ORDER_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

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
    const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

    // Function to determine the status class
    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-400'; // Light orange/yellow color
            case 'Active':
                return 'bg-green-400'; // Green color
            case 'Inactive':
                return 'bg-red-400'; // Red color
            default:
                return ''; // Default case (optional)
        }
    };

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Contract Accounts">
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
                            <th className="w-28 px-4 py-2">ORDER ID</th>
                            <th className="w-24 px-4 py-2">DATE</th>
                            <th className="w-36 px-4 py-2">NAME</th>
                            <th className="w-36 px-4 py-2">PLAN NAME</th>
                            <th className="w-32 px-4 py-2">PRICE</th>
                            <th className="w-36 px-4 py-2">PAYMENT TYPE</th>
                            <th className="w-28 px-4 py-2">STATUS</th>
                            <th className="w-28 px-4 py-2">COUPON</th>
                            <th className="w-40 px-4 py-2">INVOICE</th>
                        </tr>
                        </thead>
                        <tbody>
                            {paginatedOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.order_id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.name}</td>
                                    <td>{order.plan_name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.payment_type}</td>
                                    <td>{order.status}</td>
                                    <td>{order.coupon}</td>
                                    <td>
                                    <div className="grid grid-cols-2 gap-6">
                                        <a href="https://demo.workdo.io/accountgo-saas/storage/uploads/bank_receipt/1685429855_payment.png" target="_blank" rel="noopener noreferrer">
                                            <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <DocumentIcon className="h-5 w-5" />
                                            </button>
                                        </a>
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
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
                <EditOrderModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    order={selectedOrder}
                />
            }
            {showDetail &&
                <DetailView
                    order={selectedOrder}
                    onClose={() => setShowDetail(false)}
                />
            }
        </>
    );
};

const DetailView = ({ order, onClose }) => {
    if (!order) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Contract Details</h2>
                <p><strong>ID:</strong> {order.id}</p>
                <p><strong>Subject:</strong> {order.subject}</p>
                <p><strong>Customer:</strong> {order.customer}</p>
                <p><strong>Type:</strong> {order.type}</p>
                <p><strong>Value:</strong> {order.value}</p>
                <p><strong>Start Date:</strong> {order.startDate}</p>
                <p><strong>End Date:</strong> {order.endDate}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default OrderPage;
