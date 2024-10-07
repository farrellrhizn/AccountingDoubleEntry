// src/components/EditContractModal.jsx
import React, { useState, useEffect } from 'react';

const EditContractModal = ({ showModal, onClose, contract, onSave }) => {
    const [formData, setFormData] = useState({
        subject: '',
        customer: '',
        type: '',
        value: '',
        startDate: '',
        endDate: '',
        status: ''
    });

    useEffect(() => {
        if (contract) {
            setFormData({
                subject: contract.subject || '',
                customer: contract.customer || '',
                type: contract.type || '',
                value: contract.value || '',
                startDate: contract.startDate || '',
                endDate: contract.endDate || '',
                status: contract.status || ''
            });
        } else {
            clearFields();
        }
    }, [contract]);

    const clearFields = () => {
        setFormData({
            subject: '',
            customer: '',
            type: '',
            value: '',
            startDate: '',
            endDate: '',
            status: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optionally, add validation or processing here
        onSave(formData); // Pass the updated contract data to the parent
    };

    const handleClose = () => {
        onClose();
        clearFields();
    };

    if (!showModal) return null; // Don't render the modal if showModal is false

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <h2 className="text-lg font-bold mb-4">Edit Contract</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="customer">
                            Customer
                        </label>
                        <input
                            type="text"
                            id="customer"
                            name="customer"
                            value={formData.customer}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="type">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="value">
                            Value
                        </label>
                        <input
                            type="text"
                            id="value"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mt-4 space-y-4 max-h-[50vh] overflow-y-auto">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="startDate">
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="endDate">
                                End Date
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="status">
                                Status
                            </label>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4 space-x-2">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContractModal;
