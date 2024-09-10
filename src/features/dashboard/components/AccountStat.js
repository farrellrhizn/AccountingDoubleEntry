import React, { useState } from 'react';
import TitleCard from "../../../components/Cards/TitleCard";
import { DASHBOARD_ACC_BALANCE } from '../../../utils/dummyData';

function AccountStat() {
    // Inisialisasi currentPage sebagai 0 (halaman pertama)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handleNextPage = () => {
        // Cek jika masih ada halaman berikutnya
        if ((currentPage + 1) * itemsPerPage < DASHBOARD_ACC_BALANCE.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        // Cek jika tidak di halaman pertama
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Hitung indeks awal dan akhir data yang akan ditampilkan berdasarkan currentPage
    const startIndex = currentPage * itemsPerPage;
    const selectedData = DASHBOARD_ACC_BALANCE.slice(startIndex, startIndex + itemsPerPage);

    return (
        <TitleCard title={"Account Balance"}>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Source</th>
                        <th className="normal-case">No of Users</th>
                        <th className="normal-case">Conversion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            selectedData.map((u, k) => {
                                return (
                                    <tr key={startIndex + k}>
                                        <th>{startIndex + k + 1}</th>
                                        <td>{u.bank}</td>
                                        <td>{u.holdername}</td>
                                        <td>{`${u.balance}`}</td>
                                    </tr>
                                );
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
                    disabled={(currentPage + 1) * itemsPerPage >= DASHBOARD_ACC_BALANCE.length}
                >
                    Next
                </button>
            </div>
        </TitleCard>
    );
}

export default AccountStat;
