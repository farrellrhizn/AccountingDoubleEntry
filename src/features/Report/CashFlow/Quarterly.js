import React from 'react';

function Quarterly() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Quarterly Cash Flow</h2>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <p>Report: Quarterly CashFlow</p>
                <p>Duration: Q1 2024 to Q4 2024</p>
                {/* Scrollable table wrapper */}
                <div className="overflow-auto max-h-96">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b sticky top-0 bg-gray-100">Category</th>
                                <th className="py-2 px-4 border-b sticky top-0 bg-gray-100">Q1</th>
                                <th className="py-2 px-4 border-b sticky top-0 bg-gray-100">Q2</th>
                                <th className="py-2 px-4 border-b sticky top-0 bg-gray-100">Q3</th>
                                <th className="py-2 px-4 border-b sticky top-0 bg-gray-100">Q4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Income Section */}
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Income</td>
                                <td colSpan="4" className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Revenue</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Invoices</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$138.55</td>
                                <td className="py-2 px-4 border-b">$171.25</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Business Profits</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Total Income = Revenue + Invoices</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$138.55</td>
                                <td className="py-2 px-4 border-b">$171.25</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            {/* Expenses Section */}
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Expenses</td>
                                <td colSpan="4" className="py-2 px-4 border-b"></td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Salaries</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Rent</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b pl-8">Utilities</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Total Expenses</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                            {/* Net Cashflow */}
                            <tr>
                                <td className="py-2 px-4 border-b font-bold">Net Cash Flow</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                                <td className="py-2 px-4 border-b">$138.55</td>
                                <td className="py-2 px-4 border-b">$171.25</td>
                                <td className="py-2 px-4 border-b">$0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Quarterly;
