import React, { useState, useEffect } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import TitleCard from '../../components/Cards/TitleCard';
import CardOption from '../../components/Cards/CardOption';
import LineChartIncome from './components/LineChartIncome';
import { ACCOUNTSTATEMENT_DATA } from '../../utils/dummyData';
import SubTitleCard from '../../components/Cards/CardSubTitle';

const IncomeSumPage = () => {
    const [accstatementData, setAccstatementData] = useState(ACCOUNTSTATEMENT_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedAccstatement, setSelectedAccstatement] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });

    // Logging to see if dateValue is being updated properly
    useEffect(() => {
        console.log("dateValue:", dateValue);
    }, [dateValue]);

    const handleDatePickerValueChange = (newValue) => {
        console.log("New Datepicker Value:", newValue);
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

    const handleEditClick = (accstatement) => {
        setSelectedAccstatement(accstatement);
        setShowModal(true);
    };

    const handleDetailClick = (accstatement) => {
        setSelectedAccstatement(accstatement);
        setShowDetail(true);
    };

    const filteredAccstatement = accstatementData.filter((accstatement) =>
        (accstatement.amount && accstatement.amount.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (accstatement.description && accstatement.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    

    const totalPages = Math.ceil(filteredAccstatement.length / itemsPerPage);

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
    const paginatedAccstatement = filteredAccstatement.slice(startIndex, startIndex + itemsPerPage);

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

            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <SubTitleCard className="w-full" title={"Report :"} bottomMargin="mb-4">
                    <div className="flex items-center justify-left text-center text-md">Transaction Summary</div>
                </SubTitleCard>
                <SubTitleCard className="w-full" title={"Type :"} bottomMargin="mb-4">
                    <div className="flex items-center justify-left text-center text-md">Revenue</div>
                </SubTitleCard>
                <SubTitleCard className="w-full" title={"Duration :"} bottomMargin="mb-4">
                    <div className="flex items-center justify-left text-center text-md">
                        {dateValue.startDate ? dateValue.startDate.toLocaleDateString() : 'Start Date'} - {dateValue.endDate ? dateValue.endDate.toLocaleDateString() : 'End Date'}
                    </div>
                </SubTitleCard>
            </div>

            <div className='grid lg:grid-cols-1  grid-cols-1 gap-6'>
                <LineChartIncome />
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
                                <th className="min-w-[150px] px-4 py-2">AMOUNT</th>
                                <th className="min-w-[200px] px-4 py-2">DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedAccstatement.map((accstatement, index) => (
                                <tr key={index}>
                                    <td className="min-w-[150px]">{accstatement.date}</td>
                                    <td className="min-w-[150px]">{accstatement.amount}</td>
                                    <td className="min-w-[150px]">{accstatement.description}</td>
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
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAccstatement.length)} of {filteredAccstatement.length} entries
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
        </>
    );
};

export default IncomeSumPage;
