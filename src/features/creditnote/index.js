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

const CreditPage = () => {
    const [creditData, setCreditData] = useState(CREDIT_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCredit, setSelectedCredit] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
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

    const handleDetailClick = (credit) => {
        setSelectedCredit(credit);
        setShowDetail(true);
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
                                <tr key={index}>
                                    <td className="min-w-[150px]">
                                        <button className='btn bg-transparent border-primary hover:bg-primary hover:text-white group'>
                                            {credit.invoice}
                                        </button>
                                    </td>
                                    <td className="min-w-[150px]">{credit.customer}</td>
                                    <td className="min-w-[150px]">{credit.date}</td>
                                    <td className="min-w-[150px]">{credit.amount}</td>
                                    <td className="min-w-[150px]">{credit.description}</td>
                                    <td className="min-w-[200px]">
                                        <div className="grid grid-cols-5 gap-2">
                                            <button onClick={() => handleDetailClick(credit)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <DocumentDuplicateIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDetailClick(credit)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <EyeIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleEditClick(credit)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
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

            {showModal && (
                <EditCreditModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    credit={selectedCredit} // Use selectedCredit here
                />
            )}
            {showDetail && (
                <DetailView
                    credit={selectedCredit} // Use selectedCredit here
                    onClose={() => setShowDetail(false)}
                />
            )}
        </>
    );
};

const DetailView = ({ credit, onClose }) => {
    if (!credit) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Credit Details</h2>
                <p><strong>Invoice ID:</strong> {credit.invoice}</p>
                <p><strong>Customer:</strong> {credit.customer}</p>
                <p><strong>Date:</strong> {credit.date}</p>
                <p><strong>Amount:</strong> {credit.amount}</p>
                <p><strong>Description:</strong> {credit.description}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default CreditPage;
