import React from 'react';

function Monthly() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Monthly Cash Flow</h2>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <p>Report: Monthly CashFlow</p>
                <p>Duration: Jan 2024 to Dec 2024</p>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Category</th>
                                <th className="py-2 px-4 border-b">January</th>
                                <th className="py-2 px-4 border-b">February</th>
                                {/* Add other months here */}
                                <th className="py-2 px-4 border-b">December</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Income Section */}
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Income</td>
                                <td colSpan="12" className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Revenue</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                {/* Add other months here */}
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Total Income</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                {/* Add other months here */}
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Monthly;
