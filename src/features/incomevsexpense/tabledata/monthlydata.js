import React from "react";

const MonthlyDataTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full min-w-max text-sm">
                <thead>
                    <tr>
                        <th>TYPE</th>
                        <th>JANUARY</th>
                        <th>FEBRUARY</th>
                        <th>MARCH</th>
                        <th>APRIL</th>
                        <th>MAY</th>
                        <th>JUNE</th>
                        <th>JULY</th>
                        <th>AUGUST</th>
                        <th>SEPTEMBER</th>
                        <th>OCTOBER</th>
                        <th>NOVEMBER</th>
                        <th>DECEMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Subtitle Row */}
                    <tr>
                        <td className="px-4 py-2 font-bold" colSpan="13">
                            Income :
                        </td>
                    </tr>

                    <tr>
                        <td>Revenue</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Invoice</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$1,444,00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>

                    {/* Subtitle Row */}
                    <tr>
                        <td className="px-4 py-2 font-bold" colSpan="13">
                            Expense :
                        </td>
                    </tr>

                    <tr>
                        <td>Payment</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td>Bill</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>

                    {/* Income Row */}
                    <tr>
                        <td className="px-4 py-2 font-bold" colSpan="13">
                            Profit = Income - Expense :
                        </td>
                    </tr>

                    {/* Total Row */}
                    <tr>
                        <td className="font-bold">Profit</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$1,444.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MonthlyDataTable;
