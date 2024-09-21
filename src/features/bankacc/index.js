import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import EditBankaccModal from './components/EditBankaccModal';
import TitleCard from '../../components/Cards/TitleCard';
import { BANKACC_DATA } from '../../utils/dummyData';

const BankAcc = () => {
    const [bankaccData, setBankaccData] = useState(BANKACC_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedBankacc, setSelectedBankacc] = useState(null);

    const handleEditClick = (bankacc) => {
        setSelectedBankacc(bankacc);
        setShowModal(true);
    };

    const handleDeleteClick = (bankacc) => {
        const updatedBankaccData = bankaccData.filter(item => item !== bankacc);
        setBankaccData(updatedBankaccData);
    };

    const filteredBankacc = bankaccData.filter(bankacc =>
        bankacc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bankacc.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bankacc.bank.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBankacc.length / itemsPerPage);

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
    const paginatedBankaccs = filteredBankacc.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <TitleCard topMargin="mt-2" title="Manage Bank Accounts">
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
                                <th className="px-4 py-2">CHART OF ACCOUNT</th>
                                <th className="px-4 py-2">NAME</th>
                                <th className="px-4 py-2">BANK</th>
                                <th className="px-4 py-2">ACCOUNT NUMBER</th>
                                <th className="px-4 py-2">CURRENT BALANCE</th>
                                <th className="px-4 py-2">CONTACT NUMBER</th>
                                <th className="px-4 py-2">BANK BRANCH</th>
                                <th className="px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedBankaccs.map((bankacc, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">{bankacc.chartOfAccount}</td>
                                    <td className="px-4 py-2">{bankacc.name}</td>
                                    <td className="px-4 py-2">{bankacc.bank}</td>
                                    <td className="px-4 py-2">{bankacc.accountNumber}</td>
                                    <td className="px-4 py-2">{bankacc.currentBalance}</td>
                                    <td className="px-4 py-2">{bankacc.contactNumber}</td>
                                    <td className="px-4 py-2">{bankacc.bankBranch}</td>
                                    <td className="px-4 py-2">
                                        <div className='flex space-x-2'>
                                            <button onClick={() => handleEditClick(bankacc)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2">
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDeleteClick(bankacc)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white p-2">
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Responsif */}
                {/* Pagination dan Informasi */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
                    {/* Informasi */}
                    <div className="text-sm text-gray-700">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBankacc.length)} of {filteredBankacc.length} entries
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

            {/* Modal Edit Bank Account */}
            {showModal &&
                <EditBankaccModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    bankacc={selectedBankacc}
                />
            }
        </>
    );
};

export default BankAcc;
