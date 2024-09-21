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
                className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md"
                onClick={onToggleView}
            >
                {'<|>'}
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md">
                <FunnelIcon className={iconClasses} />
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md">
                <DocumentPlus className={iconClasses} />
            </button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white p-2 rounded-md">
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

    // Mapping level to padding-left classes
    const paddingMap = {
        0: 'pl-0',
        1: 'pl-4',
        2: 'pl-8',
        3: 'pl-12',
        4: 'pl-16',
        // Tambahkan lebih banyak jika diperlukan
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

    // Menentukan komponen card yang akan digunakan
    const CardComponent = view === 'cardVertical' ? CardVertical : TitleCard;

    return (
        <CardComponent 
            title="Balance Sheet" 
            topMargin="mt-2" 
            TopSideButtons={<TopSideButtons onToggleView={handleToggleView} />}
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
    );
}
