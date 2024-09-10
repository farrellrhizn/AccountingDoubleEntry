import React from 'react';
import { FaSearch, FaTimes, FaDownload } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function InvoiceSummary() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Invoices',
                data: [200, 400, 600, 300, 100, 450, 650, 500, 400, 600, 800, 200],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Invoice Summary</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm flex items-center hover:bg-green-600 focus:outline-none">
                    <FaDownload className="mr-2"/> 
                </button>
            </div>
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6">
                <span className="text-gray-500">Dashboard</span> &gt;
                <span className="text-gray-500"> Report</span> &gt;
                <span className="text-gray-900"> Invoice Summary</span>
            </nav>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm mb-2">Start Month</label>
                        <select className="bg-gray-200 p-2 rounded-md w-full">
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                        </select>
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm mb-2">End Month</label>
                        <select className="bg-gray-200 p-2 rounded-md w-full">
                            <option value="December">December</option>
                            <option value="November">November</option>
                            <option value="October">October</option>
                        </select>
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm mb-2">Customer</label>
                        <select className="bg-gray-200 p-2 rounded-md w-full">
                            <option value="All">Select Customer</option>
                            <option value="Customer 1">Customer 1</option>
                            <option value="Customer 2">Customer 2</option>
                        </select>
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                        <label className="block text-gray-700 text-sm mb-2">Status</label>
                        <select className="bg-gray-200 p-2 rounded-md w-full">
                            <option value="All">Select Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2 md:ml-4 mt-4 md:mt-0">
                        <button className="bg-green-500 text-white p-2 rounded-md">
                            <FaSearch />
                        </button>
                        <button className="bg-red-500 text-white p-2 rounded-md">
                            <FaTimes />
                        </button>
                    </div>
                </div>
            </div>

            {/* Report Summary */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-md mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-700">Report:</h4>
                    <p className="text-gray-900">Invoice Summary</p>
                </div>
                <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-bold text-gray-700">Duration:</h4>
                    <p className="text-gray-900">Jan-2024 to Dec-2024</p>
                </div>
            </div>

            {/* Additional Information Boxes */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col md:flex-row md:space-x-4 mb-6">
                <div className="w-full md:w-1/3 p-4 bg-white rounded-md shadow mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-700">Total Invoice</h4>
                    <p className="text-green-500">$1,444.00</p>
                </div>
                <div className="w-full md:w-1/3 p-4 bg-white rounded-md shadow mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-700">Total Paid</h4>
                    <p className="text-red-500">$0.00</p>
                </div>
                <div className="w-full md:w-1/3 p-4 bg-white rounded-md shadow">
                    <h4 className="font-bold text-gray-700">Total Due</h4>
                    <p className="text-gray-900">$1,444.00</p>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-4 rounded-md shadow-md mb-6">
                <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </div>
    );
}

export default InvoiceSummary;
