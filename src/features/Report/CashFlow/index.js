import React, { useState } from 'react';
import Monthly from './Monthly';
import Quarterly from './Quarterly';
import { FaFileDownload, FaCalendarAlt, FaFilter, FaTimes } from 'react-icons/fa';

function CashFlow() {
    const [view, setView] = useState('monthly');

    return (
        <div className="p-6">
            {/* Header dengan tombol download */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Cash Flow</h2>
                <button className="text-green-500">
                    <FaFileDownload size={24} />
                </button>
            </div>

            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt; 
                <span className="text-gray-500"> Report</span> &gt;
                <span className="text-gray-900"> Cash Flow</span>
            </nav>

            {/* Tombol Monthly, Quarterly, dan Filter Tahun */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <button
                        className={`flex items-center px-4 py-2 rounded-md ${view === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setView('monthly')}
                    >
                        <FaCalendarAlt className="mr-2" />
                        Monthly
                    </button>
                    <button
                        className={`flex items-center px-4 py-2 rounded-md ${view === 'quarterly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setView('quarterly')}
                    >
                        <FaCalendarAlt className="mr-2" />
                        Quarterly
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <select className="bg-gray-200 p-2 rounded-md">
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    <button className="bg-green-500 text-white p-2 rounded-md">
                        <FaFilter />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md">
                        <FaTimes /> {/* Ikon ini menggantikan ikon filter untuk tombol "Clear" */}
                    </button>
                </div>
            </div>

            {/* Bagian Report dan Duration dengan jarak di antara mereka */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4">
                <div className="w-full md:w-1/2 bg-white p-4 rounded-md shadow-md">
                    <h4 className="font-bold">Report:</h4>
                    <p>{view === 'monthly' ? 'Monthly Cashflow' : 'Quarterly Cashflow'}</p>
                </div>
                <div className="w-full md:w-1/2 bg-white p-4 rounded-md shadow-md">
                    <h4 className="font-bold">Duration:</h4>
                    <p>Jan-2024 to Dec-2024</p>
                </div>
            </div>

            {/* Render tabel berdasarkan pilihan */}
            <div className="mt-4 bg-white p-4 rounded-md shadow-md overflow-x-auto">
                {view === 'monthly' && <Monthly />}
                {view === 'quarterly' && <Quarterly />}
            </div>
        </div>
    );
}

export default CashFlow;
