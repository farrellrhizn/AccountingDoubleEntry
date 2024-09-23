import React from 'react';

const ViewRevenueModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">View Revenue</h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Date</td>
              <td className="py-2 px-4">{data.date}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Amount</td>
              <td className="py-2 px-4">{data.amount}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Account</td>
              <td className="py-2 px-4">{data.account}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Customer</td>
              <td className="py-2 px-4">{data.customer}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Category</td>
              <td className="py-2 px-4">{data.category}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Reference</td>
              <td className="py-2 px-4">{data.reference}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Description</td>
              <td className="py-2 px-4">{data.description}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-4 font-medium text-gray-700">Receipt</td>
              <td className="py-2 px-4">{data.receipt}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRevenueModal;
