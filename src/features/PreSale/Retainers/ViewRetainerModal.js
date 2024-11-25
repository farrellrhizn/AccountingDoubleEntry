import React from 'react';

const ViewRetainerModal = ({ data, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">View Retainer</h2>
                <p><strong>Retainer ID:</strong> {data.retainer}</p>
                <p><strong>Customer:</strong> {data.customer}</p>
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Issue Date:</strong> {data.issueDate}</p>
                <p><strong>Status:</strong> {data.status}</p>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Close</button>
                </div>
            </div>
        </div>
    );
};

export default ViewRetainerModal;
