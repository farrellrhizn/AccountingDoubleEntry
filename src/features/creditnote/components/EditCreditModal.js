// src/features/creditnote/components/EditCreditModal.js

import React, { useState, useEffect } from 'react';

const EditCreditModal = ({ showModal, onClose, credit, onUpdate }) => {
    const [formData, setFormData] = useState({
        invoice: '',
        customer: '',
        date: '',
        amount: '',
        description: '',
    });

    useEffect(() => {
        if (credit) {
            setFormData({
                invoice: credit.invoice || '',
                customer: credit.customer || '',
                date: credit.date || '',
                amount: credit.amount || '',
                description: credit.description || '',
            });
        }
    }, [credit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCredit = {
            ...credit,
            ...formData,
        };

        onUpdate(updatedCredit);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${showModal ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Credit</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="invoice">Invoice ID</label>
                        <input
                            type="text"
                            id="invoice"
                            name="invoice"
                            className="input input-bordered w-full"
                            value={formData.invoice}
                            disabled
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="customer">Customer</label>
                        <input
                            type="text"
                            id="customer"
                            name="customer"
                            className="input input-bordered w-full"
                            value={formData.customer}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="input input-bordered w-full"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            className="input input-bordered w-full"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="input input-bordered w-full"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCreditModal;
