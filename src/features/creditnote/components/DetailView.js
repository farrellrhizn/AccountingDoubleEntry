// src/features/creditnote/components/DetailView.jsx

import React from 'react';

const DetailView = ({ credit, onClose }) => {
    if (!credit) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Credit Details</h2>
                <p><strong>Invoice ID:</strong> {credit.invoice}</p>
                <p><strong>Customer:</strong> {credit.customer}</p>
                <p><strong>Date:</strong> {credit.date}</p>
                <p><strong>Amount:</strong> {credit.amount}</p>
                <p><strong>Description:</strong> {credit.description}</p>
                <button onClick={onClose} className="mt-4 btn bg-primary text-white hover:bg-secondary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default DetailView;
