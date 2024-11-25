import React, { useRef, useState } from 'react';
import { FunnelIcon, DocumentArrowDownIcon, PrinterIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as XLSX from 'xlsx';
import ReactToPrint from 'react-to-print';
import dummyData from "../../utils/dummyData";

const TrialBalance = () => {
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const printRef = useRef();

    const toggleFilterPanel = () => {
        setIsFilterPanelOpen(!isFilterPanelOpen);
    };

    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(dummyData.TRIAL_BALANCE_DATA);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Trial Balance');
        XLSX.writeFile(wb, 'trial_balance.xlsx');
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                <h1 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-0">Trial Balance</h1>
                <div className="flex space-x-2">
                    <button
                        className="mb-100 bg-white p-4 rounded shadow-md"
                        onClick={toggleFilterPanel}
                    >
                        <FunnelIcon className="w-4 h-4" />
                    </button>
                    <button
                        className="mb-100 bg-white p-4 rounded shadow-md"
                        onClick={handleExport}
                    >
                        <DocumentArrowDownIcon className="w-4 h-4" />
                    </button>
                    <ReactToPrint
                        trigger={() => (
                            <button className="mb-100 bg-white p-4 rounded shadow-md">
                                <PrinterIcon className="w-4 h-4" />
                            </button>
                        )}
                        content={() => printRef.current}
                    />
                </div>
            </div>

            {isFilterPanelOpen && (
                <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex space-x-0 mb-4 sm:mb-0">
                            <button className="btn bg-transparent border border-gray-300 text-green-500 hover:bg-gray-100 rounded-none rounded-l-lg">Collapse</button>
                            <button className="btn bg-transparent border border-gray-300 text-green-500 hover:bg-gray-100 rounded-none rounded-r-lg">Expand</button>
                        </div>
                        <div className="flex flex-wrap space-x-0 sm:space-x-4 mb-4 sm:mb-0 bg-transparent border border-gray-300 p-2 rounded-lg w-full sm:w-auto">
                            <div className="flex flex-col w-full sm:w-auto mb-2 sm:mb-0">
                                <label className="text-gray-700">Start Date</label>
                                <input type="date" className="input input-bordered bg-transparent w-full" defaultValue="2024-01-01" />
                            </div>
                            <div className="flex flex-col w-full sm:w-auto">
                                <label className="text-gray-700">End Date</label>
                                <input type="date" className="input input-bordered bg-transparent w-full" defaultValue="2024-08-13" />
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="mb-100 bg-white p-4 rounded shadow-md">
                                <FunnelIcon className="w-5 h-5" />
                            </button>
                            <button className="mb-100 bg-white p-4 rounded shadow-md">
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Trial Balance of Rajodiya Infotech as of 2024-01-01 to 2024-08-14
                </h2>
                <div className="overflow-x-auto">
                    <div ref={printRef}>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Account</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Account Code</th>
                                    <th className="px-2 py-3 text-right text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Debit</th>
                                    <th className="px-2 py-3 text-right text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Credit</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {dummyData.TRIAL_BALANCE_DATA.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 border border-gray-200">{item.account}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 border border-gray-200">{item.code}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm text-right text-green-500 border border-gray-200">{item.debit}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm text-right text-green-500 border border-gray-200">{item.credit}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Total</th>
                                    <td></td>
                                    <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm text-right text-green-500 font-semibold border border-gray-200">$490.25</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-xs sm:text-sm text-right text-green-500 font-semibold border border-gray-200">$220.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrialBalance;
