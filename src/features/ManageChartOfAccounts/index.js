
import React, { useState, useEffect } from "react";
import moment from "moment";
import { PlusIcon, FunnelIcon, XMarkIcon, ChartBarIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import TitleCard from "../../components/Cards/TitleCard";
import dummyData from "../../utils/dummyData";
import PopupForm from "./PopUpTambah";
import EditForm from "./PopUpEdit"; 
import { useNavigate } from "react-router-dom";

const TopSideButtons = ({ applyDateFilter, removeFilter, onAddClick }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const applyFilter = () => {
        applyDateFilter(startDate, endDate);
    };

    const clearFilter = () => {
        setStartDate("");
        setEndDate("");
        removeFilter();
    };

    return (
        <div className="mb-100 bg-white p-4 rounded shadow-md">
            <div className="flex justify-end mb-2">
                <button onClick={onAddClick} className="btn btn-sm btn-outline">
                    <PlusIcon className="w-5 mr-2" /> Tambah
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

const AccountsTable = ({ accounts, title, onEditClick, onDeleteClick }) => {
    const navigate = useNavigate();

    const handleChartBarClick = () => {
        navigate('/app/LedgerSummary');
    };
    return (
        <div className="mb-8 bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Parent Account Name</th>
                            <th>Balance</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.name}</td>
                                <td>{account.type}</td>
                                <td>{account.parentAccountName}</td>
                                <td>{account.balance}</td>
                                <td>{account.status}</td>
                                <td className="space-x-2 flex">
                                <button 
                                    className="btn btn-sm btn-outline"
                                    onClick={handleChartBarClick}
                                >
                                    <ChartBarIcon className="w-5 h-5" />
                                </button>
                                    <button 
                                        className="btn btn-sm btn-outline"
                                        onClick={() => onEditClick(account)}
                                    >
                                        <PencilIcon className="w-5 h-5" />
                                    </button>
                                    <button 
                                        className="btn btn-sm btn-outline"
                                        onClick={() => onDeleteClick(account.id)}
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function ManageChartOfAccounts() {
    const [accounts, setAccounts] = useState([]);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editAccount, setEditAccount] = useState(null);

    useEffect(() => {
        setAccounts(dummyData.RECENT_TRANSACTIONS);
    }, []);

    const applyDateFilter = (startDate, endDate) => {
        const filteredAccounts = dummyData.RECENT_TRANSACTIONS.filter((account) => {
            const accountDate = moment(account.date);
            return accountDate.isBetween(startDate, endDate, undefined, '[]');
        });
        setAccounts(filteredAccounts);
    };

    const removeFilter = () => {
        setAccounts(dummyData.RECENT_TRANSACTIONS);
    };

    const handleAddClick = () => {
        setShowAddPopup(true);
    };

    const handleCloseAddPopup = () => {
        setShowAddPopup(false);
    };

    const handleCreateAccount = (newAccount) => {
        setAccounts([...accounts, newAccount]);
    };

    const handleEditClick = (account) => {
        setEditAccount(account);
        setShowEditPopup(true);
    };

    const handleCloseEditPopup = () => {
        setShowEditPopup(false);
        setEditAccount(null);
    };

    const handleUpdateAccount = (updatedAccount) => {
        const updatedAccounts = accounts.map((account) =>
            account.id === updatedAccount.id ? updatedAccount : account
        );
        setAccounts(updatedAccounts);
    };

    const handleDeleteClick = (id) => {
        setAccounts(accounts.filter((account) => account.id !== id));
    };

    return (
        <div className="page">
            <TitleCard title="Manage Chart of Accounts">
                <TopSideButtons
                    applyDateFilter={applyDateFilter}
                    removeFilter={removeFilter}
                    onAddClick={handleAddClick}
                />
            </TitleCard>
            <AccountsTable 
                title="Assets"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <AccountsTable 
                title="Liabilities"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <AccountsTable 
                title="Equity"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <AccountsTable 
                title="Income"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <AccountsTable 
                title="Costs of Goods Sold"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            <AccountsTable 
                title="Expenses"
                accounts={accounts} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            {showAddPopup && (
                <PopupForm
                    onClose={handleCloseAddPopup}
                    onCreate={handleCreateAccount}
                />
            )}
            {showEditPopup && (
                <EditForm
                    account={editAccount}
                    onClose={handleCloseEditPopup}
                    onUpdate={handleUpdateAccount}
                />
            )}
        </div>
    );
}

export default ManageChartOfAccounts;
