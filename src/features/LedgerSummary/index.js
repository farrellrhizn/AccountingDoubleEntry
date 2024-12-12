import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import moment from 'moment';
import { CloudArrowDownIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import TitleCard from "../../components/Cards/TitleCard";
const dummyData = require('../../utils/dummyData');

const TopSideButtons = ({ applyDateFilter, removeFilter }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [account, setAccount] = useState("");

    const applyFilter = () => {
        applyDateFilter(startDate, endDate, account);
    };

    const clearFilter = () => {
        setStartDate("");
        setEndDate("");
        setAccount("");
        removeFilter();
    };

    const handleDownloadExcel = () => {
        const table = document.getElementById('ledger-table');
        const workbook = XLSX.utils.table_to_book(table);
        XLSX.writeFile(workbook, 'ledger_summary.xlsx');
    };

    return (
        <div className="mb-4">
            <div className="flex justify-end mb-2">
                <button onClick={handleDownloadExcel} className="btn btn-sm btn-outline">
                    <CloudArrowDownIcon className="w-5 mr-2" /> Unduh
                </button>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <div className="flex flex-col w-full md:w-auto">
                    <label className="text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="input input-bordered input-sm w-full md:w-auto"
                        placeholder="Start Date"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <label className="text-sm font-medium">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="input input-bordered input-sm w-full md:w-auto"
                        placeholder="End Date"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <label className="text-sm font-medium">Account</label>
                    <select
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        className="select select-bordered select-sm w-full md:w-auto"
                    >
                        <option value="">Checking Account</option>
                        <option value="Bank">Petty Cash</option>
                        <option value="Cash">Account Receivables</option>
                        <option value="Cash">Allowance for Doubtful Accounts</option>
                        <option value="Cash">Stock of Raw Material</option>
                        <option value="Bank">Stock of Work in Progress</option>
                        <option value="Bank">Goods Received Clearing Account</option>
                        <option value="Bank">Land and Building</option>
                        <option value="Bank">Office Furniture and Equipment</option>
                        <option value="Bank">Accum Depreciation Furn and Equip</option>
                        <option value="Bank">Motor Vehicle</option>
                        <option value="Bank">Accum Depreciation Motor Vehicle</option>
                        <option value="Bank">Account Payable</option>
                        <option value="Bank">Deferred Payable</option>
                        <option value="Bank">Accrued Income Tax Central</option>
                        <option value="Bank">Income Tax Payable</option>
                        <option value="Bank">Accrued Franchise Tax</option>
                        {/* Tambahkan opsi lainnya sesuai kebutuhan */}
                    </select>
                </div>
                <div className="flex items-end w-full md:w-auto">
                    <button onClick={applyFilter} className="btn btn-sm btn-outline w-full md:w-auto">
                        <FunnelIcon className="w-5 mr-2" /> Filter
                    </button>
                </div>
                <div className="flex items-end w-full md:w-auto">
                    <button onClick={clearFilter} className="btn btn-sm btn-outline w-full md:w-auto">
                        <XMarkIcon className="w-5 mr-2" /> Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

const LedgerTable = ({ ledgerData }) => {
    return (
        <div id="ledger-table" className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Name</th>
                        <th>Transaction Type</th>
                        <th>Transaction Date</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {ledgerData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.accountName}</td>
                            <td>{data.name}</td>
                            <td>{data.transactionType}</td>
                            <td>{data.transactionDate}</td>
                            <td>{data.debit}</td>
                            <td>{data.credit}</td>
                            <td>{data.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function LedgerSummary() {
    const [ledgerData, setLedgerData] = useState([]);

    useEffect(() => {
        setLedgerData(dummyData.DUMMY_LEDGER_DATA);
    }, []);

    const applyDateFilter = (startDate, endDate, account) => {
        let filteredData = dummyData.DUMMY_LEDGER_DATA;
        if (startDate) {
            filteredData = filteredData.filter((data) => moment(data.transactionDate).isSameOrAfter(startDate));
        }
        if (endDate) {
            filteredData = filteredData.filter((data) => moment(data.transactionDate).isSameOrBefore(endDate));
        }
        if (account) {
            filteredData = filteredData.filter((data) => data.accountName === account);
        }
        setLedgerData(filteredData);
    };

    const removeFilter = () => {
        setLedgerData(dummyData.DUMMY_LEDGER_DATA);
    };

    return (
        <div className="page">
            <TitleCard title="Ledger Summary">
                <TopSideButtons applyDateFilter={applyDateFilter} removeFilter={removeFilter} />
                <LedgerTable ledgerData={ledgerData} />
            </TitleCard>
        </div>
    );
}

export default LedgerSummary;
