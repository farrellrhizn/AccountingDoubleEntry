import React, { useState } from "react";
import moment from "moment";
import TitleCard from "../../components/Cards/TitleCard";
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon';
import DocumentPlus from '@heroicons/react/24/outline/DocumentPlusIcon';
import PrinterIcon from '@heroicons/react/24/outline/PrinterIcon';
import CardVertical from "../../components/Cards/CardVertical";
import { BALANCE_SHEET } from "../../utils/dummyData";

const iconClasses = `h-5 w-5`;

const TopSideButtons = ({ onToggleView }) => {
    return (
        <div className="flex space-x-2">
            <button 
                className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white"
                onClick={onToggleView}
            >
                {'<|>'}
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white">
                <FunnelIcon className={iconClasses} />
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white">
                <DocumentPlus className={iconClasses} />
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white">
                <PrinterIcon className={iconClasses} />
            </button>
        </div>
    );
};

export default function Balance() {
    const [balances, setBalance] = useState(BALANCE_SHEET);
    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });
    const [view, setView] = useState('cardVertical'); // State to manage view type

    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setDateValue(newValue);
    };

    const handleToggleView = () => {
        setView(view === 'cardVertical' ? 'titleCard' : 'cardVertical');
    };

    const renderRows = (items, level = 0) => {
        return items.map((item, index) => (
            <React.Fragment key={`${item.account}-${index}`}>
                <tr>
                    <td className={`px-${4 * level} py-2 ${level === 0 ? 'font-bold' : ''} ${item.account === "Petty Cash" || item.account === "Inventory" ? 'text-primary' : ''}`}>
                        {item.account}
                    </td>
                    <td className="px-4 py-2">{item.accountCode || ''}</td>
                    <td className={`px-4 py-2 text-right ${item.account === "Petty Cash" || item.account === "Inventory" ? 'text-primary' : ''}`}>
                        {item.total !== null ? `$${item.total.toFixed(2)}` : ''}
                    </td>
                </tr>
                {item.children && renderRows(item.children, level + 1)}
            </React.Fragment>
        ));
    };

    return (
        <>
            {view === 'cardVertical' ? (
                <CardVertical title="Balance Sheet" topMargin="mt-2" TopSideButtons={<TopSideButtons onToggleView={handleToggleView} />}>
                    <div className="overflow-x-auto mt-4">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Account</th>
                                    <th className="px-4 py-2 text-left">Account Code</th>
                                    <th className="px-4 py-2 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderRows(balances)}
                            </tbody>
                        </table>
                    </div>
                </CardVertical>
            ) : (
                <TitleCard title="Balance Sheet" topMargin="mt-2" TopSideButtons={<TopSideButtons onToggleView={handleToggleView} />}>
                    <div className="overflow-x-auto mt-4">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Account</th>
                                    <th className="px-4 py-2 text-left">Account Code</th>
                                    <th className="px-4 py-2 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderRows(balances)}
                            </tbody>
                        </table>
                    </div>
                </TitleCard>
            )}
        </>
    );
}
