import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import TitleCard from "../../components/Cards/TitleCard";
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon';
import DocumentPlus from '@heroicons/react/24/outline/DocumentPlusIcon';
import PrinterIcon from '@heroicons/react/24/outline/PrinterIcon';
import CardVertical from "../../components/Cards/CardVertical";
import { BALANCE_SHEET } from "../../utils/dummyData";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { showNotification } from "../common/headerSlice";

const iconClasses = "h-5 w-5";

// TopSideButtons Component
const TopSideButtons = ({ onToggleView, onToggleFilters, onAddDocument, onPrintDocument }) => { // Add onAddDocument prop
    return (
        <div className="flex space-x-2">
            <button 
                className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={onToggleView}
            >
                {'<|>'}
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md" onClick={onToggleFilters}>
                <FunnelIcon className={iconClasses} />
            </button>
            <button 
                className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={onAddDocument} // Add onClick handler
            >
                <DocumentPlus className={iconClasses} />
            </button>
            <button 
            className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md"
            onClick={onPrintDocument}>
                <PrinterIcon className={iconClasses} />
            </button>
        </div>
    );
};

// FilterCard Component
const FilterCard = ({ dateValue, setDateValue }) => {
    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setDateValue(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-4 w-full">
            <div className="flex space-x-2">
                <button className="btn bg-purple-500 hover:bg-primary text-white">Collapse</button>
                <button className="btn bg-purple-700 hover:bg-primary text-white">Expand</button>
            </div>
            <div className="flex space-x-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={moment(dateValue.startDate).format("YYYY-MM-DD")}
                        onChange={handleDateChange}
                        className="input input-bordered"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={moment(dateValue.endDate).format("YYYY-MM-DD")}
                        onChange={handleDateChange}
                        className="input input-bordered"
                    />
                </div>
            </div>
            <div className="flex space-x-2">
                <button className="m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                    <MagnifyingGlassIcon className="h-5 w-5 text-primary group-hover:text-white" />
                </button>
                <button className="m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group">
                    <TrashIcon className="h-5 w-5 text-primary group-hover:text-white" />
                </button>
            </div>
        </div>
    );
};

// Main Balance Component
export default function Balance() {
    const dispatch = useDispatch(); // Initialize dispatch
    const [balances, setBalance] = useState(BALANCE_SHEET);
    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });
    const [view, setView] = useState('cardVertical'); // State to manage view type
    const [showFilters, setShowFilters] = useState(false); // Default state for filter visibility set to false

    const handleToggleView = () => {
        setView(view === 'cardVertical' ? 'titleCard' : 'cardVertical');
    };

    const handleToggleFilters = () => {
        setShowFilters(prev => !prev); // Toggle filter visibility
    };

    const handleAddDocument = () => {
        dispatch(
            showNotification({
                message: "Document has been successfully exported!", // Adjust the message as needed
                status: 1, // Assuming status 1 is for success
            })
        );
    };

    const handlePrintDocument = () => {
        dispatch(
            showNotification({
                message: "Document has been successfully printed!", // Adjust the message as needed
                status: 1, // Assuming status 1 is for success
            })
        );
    };

    const paddingMap = {
        0: 'pl-0',
        1: 'pl-4',
        2: 'pl-8',
        3: 'pl-12',
        4: 'pl-16',
    };

    const renderRows = (items, level = 0) => {
        return items.map((item, index) => (
            <React.Fragment key={`${item.account}-${index}`}>
                <tr>
                    <td className={`py-2 ${paddingMap[level] || 'pl-0'} ${level === 0 ? 'font-bold' : 'font-medium'} ${item.account === "Petty Cash" || item.account === "Inventory" ? 'text-primary' : 'text-gray-700'} text-sm md:text-base`}>
                        {item.account}
                    </td>
                    <td className="px-4 py-2 text-sm md:text-base">{item.accountCode || ''}</td>
                    <td className={`px-4 py-2 text-right text-sm md:text-base ${item.account === "Petty Cash" || item.account === "Inventory" ? 'text-primary' : 'text-gray-700'}`}>
                        {item.total !== null ? `$${item.total.toFixed(2)}` : ''}
                    </td>
                </tr>
                {item.children && renderRows(item.children, level + 1)}
            </React.Fragment>
        ));
    };

    // Determine which card component to use
    const CardComponent = view === 'cardVertical' ? CardVertical : TitleCard;

    return (
        <>
            {/* Conditionally render Filter Card based on showFilters state */}
            {showFilters && (
                <CardComponent title="Filters" topMargin="mt-2">
                    <FilterCard dateValue={dateValue} setDateValue={setDateValue} />
                </CardComponent>
            )}

            {/* Balance Sheet Card */}
            <CardComponent 
                title="Balance Sheet" 
                topMargin="mt-2" 
                TopSideButtons={<TopSideButtons onToggleView={handleToggleView} onToggleFilters={handleToggleFilters} onAddDocument={handleAddDocument} onPrintDocument={handlePrintDocument}/>} // Pass the new prop
            >
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Code</th>
                                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {renderRows(balances)}
                        </tbody>
                    </table>
                </div>
            </CardComponent>
        </>
    );
}
