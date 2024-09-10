import React, { useState } from 'react';
import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
    {source : "Facebook Ads", count : "26,345", conversionPercent : 10.2},
    {source : "Google Ads", count : "21,341", conversionPercent : 11.7},
    {source : "Instagram Ads", count : "34,379", conversionPercent : 12.4},
    {source : "Affiliates", count : "12,359", conversionPercent : 20.9},
    {source : "Organic", count : "10,345", conversionPercent : 10.3},
    {source : "Facebook Ads", count : "26,345", conversionPercent : 10.2},
    {source : "Google Ads", count : "21,341", conversionPercent : 11.7},
    {source : "Instagram Ads", count : "34,379", conversionPercent : 12.4},
    {source : "Affiliates", count : "12,359", conversionPercent : 20.9},
    {source : "Organic", count : "10,345", conversionPercent : 10.3},
    {source : "Facebook Ads", count : "26,345", conversionPercent : 10.2},
    {source : "Google Ads", count : "21,341", conversionPercent : 11.7},
    {source : "Instagram Ads", count : "34,379", conversionPercent : 12.4},
    {source : "Affiliates", count : "12,359", conversionPercent : 20.9},
    {source : "Organic", count : "10,345", conversionPercent : 10.3},
];

function UserChannels() {
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
        <TitleCard title={"User Signup Source"}>
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
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{`${u.conversionPercent}%`}</td>
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

export default UserChannels;
    