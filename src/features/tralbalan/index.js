import React, { useState } from 'react';
import { FaPrint, FaFileDownload, FaFilter } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

function Tralbalan() {
  const [showFilter, setShowFilter] = useState(false);
  const [tableData] = useState([
    { account: 'Petty Cash', accountCode: '1065', debit: 20.0, credit: 110.0 },
    { account: 'Inventory', accountCode: '1510', debit: 50.0, credit: 21100.0 },
    { account: 'Accum.depreciation-Motor Vehicle', accountCode: '1845', debit: 0, credit: 0 },
    { account: 'Land and Buildings', accountCode: '1810', debit: 0, credit: 10550.0 },
    { account: 'Account Receivables', accountCode: '1200', debit: 0, credit: 10550.0 },
    { account: 'Checking Account', accountCode: '1060', debit: 0, credit: 10550.0 },
    { account: 'Stock of Raw Materials', accountCode: '1520', debit: 0, credit: 10550.0 },
    { account: 'Deferred Income', accountCode: '2105', debit: 0, credit: 10550.0 },
    { account: 'Retained Income', accountCode: '3035', debit: 0, credit: 10550.0 },
    { account: 'Sales Income', accountCode: '4010', debit: 0, credit: 31760.0 },
    { account: 'Cost of Sales- On Services', accountCode: '5005', debit: 220.25, credit: 0 },
    { account: 'Rent Paid', accountCode: '5760', debit: 200.0, credit: 0 },
  ]);

  // Fungsi untuk mencetak halaman
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text('Trial Balance Data', 10, 10);
    tableData.forEach((row, index) => {
      doc.text(
        `${index + 1}. ${row.account} - ${row.accountCode} - Debit: $${row.debit || 0} - Credit: $${row.credit || 0}`,
        10,
        20 + index * 10
      );
    });
    doc.save('trial_balance_data.pdf');
  };

  // Fungsi untuk mendownload file dengan format .xlsx
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Trial Balance');
    XLSX.writeFile(workbook, 'trial_balance_data.xlsx');
  };

  // Fungsi untuk menampilkan/menyembunyikan kolom filter
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="text-xl md:text-2xl font-bold">Trial Balance</h2>
        <div className="flex space-x-2">
          <button onClick={handlePrint} className="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-blue-600">
            <FaPrint />
          </button>
          <button onClick={handleDownload} className="bg-green-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-600">
            <FaFileDownload />
          </button>
          <button onClick={toggleFilter} className="bg-yellow-500 text-white px-3 py-2 rounded-md shadow-sm hover:bg-yellow-600">
            <FaFilter />
          </button>
        </div>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                <option>Select Customer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                <option>Select Status</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Data Display Section */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h1 className="text-lg font-bold mb-4 text-gray-800">
          Trial Balance of WorkDo as of 2024-01-01 to 2024-12-07
        </h1>
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Account</th>
              <th className="px-4 py-2">Account Code</th>
              <th className="px-4 py-2 text-right">Debit</th>
              <th className="px-4 py-2 text-right">Credit</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-4 py-2 text-green-700 font-medium">{row.account}</td>
                <td className="px-4 py-2">{row.accountCode}</td>
                <td className="px-4 py-2 text-right text-green-600">{row.debit ? `$${row.debit.toFixed(2)}` : '$0.00'}</td>
                <td className="px-4 py-2 text-right text-green-600">{row.credit ? `$${row.credit.toFixed(2)}` : '$0.00'}</td>
              </tr>
            ))}
            <tr className="font-bold border-t border-gray-300">
              <td className="px-4 py-2">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 text-right">
                ${tableData.reduce((sum, row) => sum + (row.debit || 0), 0).toFixed(2)}
              </td>
              <td className="px-4 py-2 text-right">
                ${tableData.reduce((sum, row) => sum + (row.credit || 0), 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tralbalan;
