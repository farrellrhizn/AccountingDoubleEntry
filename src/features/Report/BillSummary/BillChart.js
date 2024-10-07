import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function InvoiceChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Invoices',
                data: [200, 400, 600, 300, 100, 450, 650, 500, 400, 600, 800, 200],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(254, 214, 178, 4)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                enabled: false,
            },
        },
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <Bar data={data} options={options} />
        </div>
    );
}

export default InvoiceChart;
