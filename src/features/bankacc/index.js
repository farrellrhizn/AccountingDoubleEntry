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
                                <th className="w-32 px-4 py-2">CHART OF ACCOUNT</th>
                                <th className="w-30 px-4 py-2">NAME</th>
                                <th className="w-25 px-4 py-2">BANK</th>
                                <th className="w-10 px-4 py-2">ACCOUNT NUMBER</th>
                                <th className="w-10 px-4 py-2">CURRENT BALANCE</th>
                                <th className="w-10 px-4 py-2">CONTACT NUMBER</th>
                                <th className="w-48 px-4 py-2">BANK BRANCH</th>
                                <th className="w-10 px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedBankaccs.map((bankacc, index) => (
                                <tr key={index}>
                                    <td>{bankacc.chartOfAccount}</td>
                                    <td>{bankacc.name}</td>
                                    <td>{bankacc.bank}</td>
                                    <td>{bankacc.accountNumber}</td>
                                    <td>{bankacc.currentBalance}</td>
                                    <td>{bankacc.contactNumber}</td>
                                    <td>{bankacc.bankBranch}</td>
                                    <td>
                                        <div className='flex grid-cols-1 gap-2'>
                                            <button onClick={() => handleEditClick(bankacc)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDeleteClick(bankacc)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBankacc.length)} of {filteredBankacc.length} entries
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
