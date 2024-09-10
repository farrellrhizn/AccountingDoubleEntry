import React, { useState, useEffect } from 'react';
import TitleCard from '../../components/Cards/TitleCard';
import Datepicker from 'react-tailwindcss-datepicker';
import CardOption from '../../components/Cards/CardOption';
import { TRANSACTION_DATA } from '../../utils/dummyData';
import SubTitleCard from '../../components/Cards/CardSubTitle';

const TransactionPage = () => {
    const [transactionData, setTransactionData] = useState(TRANSACTION_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
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

    const handleEditClick = (transaction) => {
        setSelectedTransaction(transaction);
        setShowModal(true);
    };

    const handleDetailClick = (transaction) => {
        setSelectedTransaction(transaction);
        setShowDetail(true);
    };

    const filteredTransaction = transactionData.filter((transaction) =>
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.account.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTransaction.length / itemsPerPage);

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
    const paginatedTransaction = filteredTransaction.slice(startIndex, startIndex + itemsPerPage);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Partially Paid':
                return 'bg-blue-400';
            case 'Paid':
                return 'bg-green-400';
            case 'Sent':
                return 'bg-yellow-400';
            default:
                return ''; // Default case (optional)
        }
    };

    return (
        <>
            <CardOption topMargin="mt-2" title={"Select By :"}>
                <div className="flex flex-wrap lg:flex-nowrap items-start">
                    <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
                        <div className='mb-3'>Date</div>
                        <div className="flex items-center">
                            <Datepicker
                                containerClassName="w-full lg:w-72"
                                value={dateValue}
                                theme={"light"}
                                inputClassName="input input-bordered w-full lg:w-72"
                                popoverDirection={"down"}
                                toggleClassName="invisible"
                                onChange={handleDatePickerValueChange}
                                showShortcuts={true}
                                primaryColor={"white"}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
                        <div className='mb-3'>Account</div>
                        <div className="flex items-center">
                            <select className="select select-bordered w-full lg:w-72">
                                <option>Select Account</option>
                                <option>Stripe / Paypal</option>
                                <option>Cash</option>
                                <option>Benjamin Adams</option>
                                <option>Chisom Latifat</option>
                                <option>Earl Hane MD</option>
                                <option>Deborah Hawkins</option>
                                <option>Pearl Reed</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
                        <div className='mb-3'>Category</div>
                        <div className="flex items-center">
                            <select className="select select-bordered w-full lg:w-72">
                                <option>Select Category</option>
                                <option>Bill</option>
                                <option>Invoice</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex items-center mt-4 lg:mt-9">
                        <button className="btn btn-primary mr-2 w-full lg:w-auto" onClick={handleSearch}>Apply</button>
                        <button className="btn btn-secondary w-full lg:w-auto" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </CardOption>

            <div className=" card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
            <SubTitleCard className="w-full" topMargin="mt-" bottomMargin="mb-(-6)" title={"Report :"}>
                    <div className="flex items-center justify-left text-center text-md">Transaction Summary</div>
            </SubTitleCard>
            <SubTitleCard className="w-full" topMargin="mt-" bottomMargin="mb-(-6)" title={"Duration :"}>
                    <div className="flex items-center justify-left text-center text-md">{dateValue[0]} - {dateValue[1]}</div>
            </SubTitleCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6">
                <SubTitleCard className="w-full" bottomMargin="mb-10" title={"Benjamin Adams - ROUNDBANK"}>
                    <div className="text-xl align-bottom">$4,891.87</div>
                </SubTitleCard>
                
                <SubTitleCard className="w-full" bottomMargin="mb-10" title={"Chisom Latifat - COBIZ BANK"}>
                    <div className="text-xl align-bottom">$5,489.20</div>
                </SubTitleCard>

                <SubTitleCard className="w-full" bottomMargin="mb-10" title={"Earl Hane MD - US BANK, NA"}>
                    <div className="text-xl align-bottom">$9,202.20</div>
                </SubTitleCard>

                <SubTitleCard className="w-full" bottomMargin="mb-10" title={"Stripe / Paypal"}>
                    <div className="mt-auto text-xl">$l,398.72</div>
                </SubTitleCard>
            </div>

            <TitleCard topMargin="mt-6" title="Manage Invoices">
                <div className="flex justify-between items-center mb-4">
                    <div className="mr-4">
                        <label htmlFor="entriesPerPage" className="mr-2">
                            Entries per page:
                        </label>
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
                                <th className="min-w-[150px] px-4 py-2">DATE</th>
                                <th className="min-w-[150px] px-4 py-2">ACCOUNT</th>
                                <th className="min-w-[150px] px-4 py-2">TYPE</th>
                                <th className="min-w-[150px] px-4 py-2">CATEGORY</th>
                                <th className="min-w-[200px] px-4 py-2">DESCRIPTION</th> 
                                <th className="min-w-[200px] px-4 py-2">AMOUNT</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedTransaction.map((transaction, index) => (
                                <tr key={index}>
                                    <td className="min-w-[150px]">{transaction.date}</td>
                                    <td className="min-w-[150px]">{transaction.account}</td>
                                    <td className="min-w-[150px]">{transaction.type}</td>
                                    <td className="min-w-[150px]">{transaction.category}</td>
                                    <td className="min-w-[150px]">{transaction.description}</td>
                                    <td className="min-w-[150px]">{transaction.amount}</td>
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTransaction.length)} of {filteredTransaction.length} entries
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
            {showDetail &&
                <DetailView
                    proposal={selectedTransaction.filteredTransaction} // Use selectedInvoice here
                    onClose={() => setShowDetail(false)}
                />
            }
        </>
    );
};

const DetailView = ({ proposal, onClose }) => {
    if (!proposal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Proposal Details</h2>
                <p><strong>Invoice ID:</strong> {proposal.invoice}</p> {/* Changed to Invoice ID */}
                <p><strong>Customer:</strong> {proposal.customer}</p>
                <p><strong>Category:</strong> {proposal.category}</p>
                <p><strong>Issue Date:</strong> {proposal.issueDate}</p>
                <p><strong>Status:</strong> {proposal.status}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default TransactionPage;
