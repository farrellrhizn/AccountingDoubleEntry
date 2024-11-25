import React from 'react';

const ViewBillModal = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">View Bill</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Bill ID</label>
                    <input 
                        type="text" 
                        value={data.billID} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                        readOnly 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Vendor</label>
                    <input 
                        type="text" 
                        value={data.vendor} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                        readOnly 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input 
                        type="text" 
                        value={data.amount} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                        readOnly 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input 
                        type="text" 
                        value={data.date} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                        readOnly 
                    />
                </div>
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

export default ViewBillModal;
