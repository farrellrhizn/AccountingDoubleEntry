import React, { useState } from 'react';
import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
    { id: "#INVO00018", customer: "Customer", issueDate: "Sep 19, 2024", dueDate: "Sep 19, 2024", amount: "$1,559.25", status: "Sent"}, 
    { id: "#INVO00017", customer: "Protiong", issueDate: "Sep 19, 2024", dueDate: "Sep 19, 2024", amount: "$1,143.45", status: "Draft"}, 
    { id: "#INVO00016", customer: "Keire", issueDate: "Sep 19, 2024", dueDate: "Sep 19, 2024", amount: "$935.55", status: "Paid"}, 
    { id: "#INVO00015", customer: "Customer", issueDate: "Mar 9, 2004", dueDate: "Jan 20, 1986", amount: "$404.25", status: "Sent"}, 
    { id: "#INVO00014", customer: "Joel O Dolan", issueDate: "Jan 20, 2020", dueDate: "Apr 13, 1975", amount: "$880.00", status: "Draft"}
];

// Fungsi untuk menentukan warna background berdasarkan status
const getStatusClass = (status) => {
    switch(status) {
        case "Sent":
            return "bg-[#ff00d3] text-white p-2 w-20 text-center rounded-lg inline-block";
        case "Draft":
            return "bg-gray-400 text-white p-2 w-20 text-center rounded-lg inline-block";
        case "Paid":
            return "bg-[#6733eb] text-white p-2 w-20 text-center rounded-lg inline-block";
        default:
            return "bg-gray-200 text-gray-700 p-2 w-20 text-center rounded-lg inline-block"; // default jika status tidak sesuai
    }
}


function RecentInvoice() {
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
        <TitleCard title={"Recent Invoices"}>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="normal-case">#</th>
                        <th className="normal-case">CUSTOMER</th>
                        <th className="normal-case">ISSUE DATE</th>
                        <th className="normal-case">DUE DATE</th>
                        <th className="normal-case">AMOUNT</th>
                        <th className="normal-case">STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            selectedData.map((u, k) => {
                                return (
                                    <tr>
                                        <td>{u.id}</td>
                                        <td>{u.customer}</td>
                                        <td>{u.issueDate}</td>
                                        <td>{u.dueDate}</td>
                                        <td>{u.amount}</td>
                                        <td>
                                            <span className={getStatusClass(u.status)}>
                                                {u.status}
                                            </span>
                                        </td>
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

export default RecentInvoice;
