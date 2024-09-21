import React, { useState } from 'react';
import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
    {date : "Jan 28, 2023", customer : "Ida F Mullen", amountdue : "$100.00"},
    {date : "Jan 15, 2023", customer : "Ida F Mullen", amountdue : "$100.00"},
    {date : "Jan 15, 2023", customer : "Keire", amountdue : "$100.00"},
    {date : "Feb 3, 2022", customer : "Protiong", amountdue : "$5.000,00"},
    {date : "Feb 9, 2022", customer : "Protiong", amountdue : "$5.000,00"},
];

function ExpenseTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < userSourceData.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedData = userSourceData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <TitleCard title={"Latest Expense"}>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">DATE</th>
                        <th className="normal-case">CUSTOMER</th>
                        <th className="normal-case">AMOUNT DUE</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            selectedData.map((u, k) => {
                                return (
                                    <tr key={startIndex + k}>
                                        <th>{startIndex + k + 1}</th>
                                        <td>{u.date}</td>
                                        <td>{u.customer}</td>
                                        <td>{u.amountdue}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button 
                    className="btn btn-md bg-primary text-white hover:bg-secondary" 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button 
                    className="btn btn-md bg-primary text-white hover:bg-secondary" 
                    onClick={handleNextPage} 
                    disabled={(currentPage + 1) * itemsPerPage >= userSourceData.length}
                >
                    Next
                </button>
            </div>
        </TitleCard>
    );
}

export default ExpenseTable;
    