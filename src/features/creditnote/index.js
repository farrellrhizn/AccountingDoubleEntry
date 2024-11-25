// src/features/creditnote/index.js

import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import TitleCard from '../../components/Cards/TitleCard';
import Datepicker from 'react-tailwindcss-datepicker';
import CardOption from '../../components/Cards/CardOption';
import { CREDIT_DATA } from '../../utils/dummyData';
import EditCreditModal from './components/EditCreditModal';
import DetailView from './components/DetailView';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { showNotification } from '../common/headerSlice';
import { useNavigate } from 'react-router-dom';

const CreditPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [creditData, setCreditData] = useState(CREDIT_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCredit, setSelectedCredit] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [creditToDelete, setCreditToDelete] = useState(null);
    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleDatePickerValueChange = (newValue) => {
        setDateValue(newValue);
    };

    const handleSearch = () => {
        console.log("Search clicked");
    };

    const handleReset = () => {
        setDateValue({
            startDate: new Date(),
            endDate: new Date(),
        });
        setSearchTerm(''); // Reset search term as well
        console.log("Reset clicked");
    };

    const handleEditClick = (credit) => {
        setSelectedCredit(credit);
        setShowModal(true);
    };

    const handleDetailIDClick = (credit) => {
        console.log("Navigating to invoice detail with ID:", credit.invoice); // Debugging
        window.location.href = "./CreditDetail";
    };

    const handleDetailClick = (credit) => {
        setSelectedCredit(credit);
        setShowDetail(true);
    };

    const handleDeleteClick = (credit) => {
        setCreditToDelete(credit);
        setShowDeleteConfirm(true);
    };

    const handleConfirmDelete = () => {
        if (creditToDelete) {
            const updatedCreditData = creditData.filter((item) => item !== creditToDelete);
            setCreditData(updatedCreditData);
            setShowDeleteConfirm(false);
            setCreditToDelete(null);
            // Mengirim notifikasi menggunakan toast
            dispatch(
                showNotification({
                  message: `Credit ${creditToDelete.invoice} has been successfully deleted!`,
                  status: 1, // Pastikan status sesuai dengan definisi Anda (misalnya, 1 untuk sukses)
                })
              );
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    const filteredCredit = creditData.filter((credit) =>
        credit.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
        credit.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCredit.length / itemsPerPage);

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
    const paginatedCredit = filteredCredit.slice(startIndex, startIndex + itemsPerPage);

    // Fungsi untuk menangani pembaruan kredit
    const handleUpdateCredit = (updatedCredit) => {
        // Validasi sederhana
        if (!updatedCredit.invoice || !updatedCredit.customer) {
            dispatch(
                showNotification({
                  message: "Invoice and Customer cannot be empty!",
                  status: 2, // Pastikan status sesuai dengan definisi Anda (misalnya, 2 untuk gagal)
                })
              );
            return;
        }

        // Perbarui data kredit
        setCreditData((prevData) =>
            prevData.map((credit) =>
                credit.invoice === updatedCredit.invoice ? updatedCredit : credit
            )
        );

        // Tampilkan notifikasi sukses
        dispatch(
            showNotification({
              message: `Credit ${updatedCredit.invoice} has been successfully edited!`,
              status: 1, // Pastikan status sesuai dengan definisi Anda (misalnya, 1 untuk sukses)
            })
          );

        // Tutup modal
        setShowModal(false);
    };

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Invoices">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center w-full md:w-auto">
                        <label htmlFor="entriesPerPage" className="mr-2">
                            Entries per page:
                        </label>
                        <select
                            id="entriesPerPage"
                            className="select select-bordered w-full md:w-auto"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <div className="w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full min-w-max">
                        <thead>
                            <tr>
                                <th className="min-w-[150px] px-4 py-2">INVOICE</th>
                                <th className="min-w-[150px] px-4 py-2">CUSTOMER</th>
                                <th className="min-w-[150px] px-4 py-2">DATE</th>
                                <th className="min-w-[200px] px-4 py-2">AMOUNT</th>
                                <th className="min-w-[200px] px-4 py-2">DESCRIPTION</th>
                                <th className="min-w-[200px] px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedCredit.map((credit, index) => (
                                <tr key={credit.id || index}>
                                    <td className="min-w-[150px]">
                                        <button className='btn bg-transparent border-primary hover:bg-primary hover:text-white group'
                                        onClick={() => handleDetailIDClick(credit)}>
                                            {credit.invoice}
                                        </button>
                                    </td>
                                    <td className="min-w-[150px]">{credit.customer}</td>
                                    <td className="min-w-[150px]">{credit.date}</td>
                                    <td className="min-w-[150px]">{credit.amount}</td>
                                    <td className="min-w-[150px]">{credit.description}</td>
                                    <td className="min-w-[200px]">
                                        <div className="grid grid-cols-4 gap-2">
                                            <button
                                                onClick={() => handleEditClick(credit)}
                                                className="btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                                            >
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(credit)}
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

                {/* Pagination dan Informasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCredit.length)} of {filteredCredit.length} entries
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

            {/* Modal Edit Credit */}
            <EditCreditModal
                showModal={showModal}
                onClose={() => setShowModal(false)}
                credit={selectedCredit}
                onUpdate={handleUpdateCredit} // Pasang handler di sini
            />

            {/* Modal Detail View */}
            {showDetail && selectedCredit && (
                <DetailView
                    credit={selectedCredit}
                    onClose={() => setShowDetail(false)}
                />
            )}

            {/* Modal Delete Confirm */}
            {showDeleteConfirm && creditToDelete && (
                <DeleteConfirmModal
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </>
    );

};

export default CreditPage;
