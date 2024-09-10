import React, { useState, useEffect } from 'react';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import TitleCard from '../../components/Cards/TitleCard';
import Datepicker from 'react-tailwindcss-datepicker';
import CardOption from '../../components/Cards/CardOption';
import { INVOICE_DATA } from '../../utils/dummyData';
import EditInvoiceModal from './components/EditInvoiceModal';

const InvoicePage = () => {
    const [invoiceData, setInvoiceData] = useState(INVOICE_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
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

    const handleEditClick = (invoice) => {
        setSelectedInvoice(invoice);
        setShowModal(true);
    };

    const handleDetailClick = (invoice) => {
        setSelectedInvoice(invoice);
        setShowDetail(true);
    };

    const filteredInvoice = invoiceData.filter((invoice) =>
        invoice.issueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredInvoice.length / itemsPerPage);

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
    const paginatedInvoice = filteredInvoice.slice(startIndex, startIndex + itemsPerPage);

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
                        <div className='mb-3'>Select Status</div>
                        <div className="flex items-center">
                            <select className="select select-bordered w-full lg:w-72">
                                <option>Select Status</option>
                                <option>Partially Paid</option>
                                <option>Paid</option>
                                <option>Sent</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
                        <div className='mb-3'>Select Customer</div>
                        <div className="flex items-center">
                            <select className="select select-bordered w-full lg:w-72">
                                <option>Select Customer</option>
                                {/* Add customer options here */}
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex items-center mt-4 lg:mt-9">
                        <button className="btn btn-primary mr-2 w-full lg:w-auto" onClick={handleSearch}>Apply</button>
                        <button className="btn btn-secondary w-full lg:w-auto" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </CardOption>

            <TitleCard topMargin="mt-2" title="Manage Invoices">
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
                                <th className="min-w-[150px] px-4 py-2">INVOICE</th>
                                <th className="min-w-[150px] px-4 py-2">CUSTOMER</th>
                                <th className="min-w-[150px] px-4 py-2">ISSUE DATE</th>
                                <th className="min-w-[150px] px-4 py-2">DUE DATE</th>
                                <th className="min-w-[200px] px-4 py-2">AMOUNT DUE</th> 
                                <th className="min-w-[200px] px-4 py-2">STATUS</th> 
                                <th className="min-w-[200px] px-4 py-2">ACTION</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedInvoice.map((invoice, index) => (
                                <tr key={index}>
                                    <td className="min-w-[150px]">
                                        <button className='btn bg-transparent border-primary hover:bg-primary hover:text-white group'>
                                            {invoice.invoice}
                                        </button>
                                    </td>
                                    <td className="min-w-[150px]">{invoice.customer}</td>
                                    <td className="min-w-[150px]">{invoice.issueDate}</td>
                                    <td className="min-w-[150px]">{invoice.dueDate}</td>
                                    <td className="min-w-[150px]">{invoice.amountDue}</td>
                                    <td className={`flex justify-center mt-3.5 ml-2 h-12 ${getStatusClass(invoice.status)} text-white font-semibold text-center rounded-lg w-20 min-w-[150px]`}>
                                        {invoice.status}
                                    </td>
                                    <td className="min-w-[200px]">
                                        <div className="grid grid-cols-5 gap-2">
                                            <button onClick={() => handleDetailClick(invoice)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <DocumentDuplicateIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDetailClick(invoice)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                                                <EyeIcon className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleEditClick(invoice)} className="btn bg-transparent border-primary hover:bg-primary hover:text-white group">
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

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevPage}
                        className={`btn bg-primary text-white hover:bg-secondary ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <div>
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredInvoice.length)} of {filteredInvoice.length} entries
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
                <EditInvoiceModal
                    showModal={showModal}
                    onClose={() => setShowModal(false)}
                    proposal={selectedInvoice} // Use selectedInvoice here
                />
            }
            {showDetail &&
                <DetailView
                    proposal={selectedInvoice} // Use selectedInvoice here
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

export default InvoicePage;
