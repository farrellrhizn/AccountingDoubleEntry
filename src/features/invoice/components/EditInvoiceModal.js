// src/features/invoice/components/EditInvoiceModal.js

import React, { useState, useEffect } from 'react';

const EditInvoiceModal = ({ showModal, onClose, invoice, onUpdate }) => { // Pastikan 'onUpdate' diterima sebagai prop
    const [formData, setFormData] = useState({
        invoice: '',
        customer: '',
        issueDate: '',
        dueDate: '',
        amountDue: '',
        status: '',
    });

    useEffect(() => {
        if (invoice) {
            setFormData({
                invoice: invoice.invoice,
                customer: invoice.customer,
                issueDate: invoice.issueDate,
                dueDate: invoice.dueDate,
                amountDue: invoice.amountDue,
                status: invoice.status,
            });
        }
    }, [invoice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedInvoice = {
            ...invoice,
            ...formData,
        };

        onUpdate(updatedInvoice); // Gunakan 'onUpdate' di sini
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${showModal ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Invoice</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="invoice">Invoice ID</label>
                        <input
                            type="text"
                            id="invoice"
                            name="invoice"
                            className="input input-bordered w-full"
                            value={formData.invoice}
                            onChange={handleChange}
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
                        <label className="block mb-1" htmlFor="issueDate">Issue Date</label>
                        <input
                            type="date"
                            id="issueDate"
                            name="issueDate"
                            className="input input-bordered w-full"
                            value={formData.issueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="dueDate">Due Date</label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            className="input input-bordered w-full"
                            value={formData.dueDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="amountDue">Amount Due</label>
                        <input
                            type="number"
                            id="amountDue"
                            name="amountDue"
                            className="input input-bordered w-full"
                            value={formData.amountDue}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            className="select select-bordered w-full"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Partially Paid">Partially Paid</option>
                            <option value="Sent">Sent</option>
                        </select>
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

export default EditInvoiceModal;
