import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'; // Jika menggunakan Headless UI
import { PencilIcon } from '@heroicons/react/24/outline';

const EditContractModal = ({ showModal, onClose, contract }) => {
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
        }
    }, [contract]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated contract:', formData);
        onClose(); // Close the modal after submission
    };

    return (
        <Dialog open={showModal} onClose={onClose}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white rounded shadow-lg w-1/2 max-w-md p-4 h-[90vh] max-h-[70vh] overflow-auto">
                    <Dialog.Title className="text-xl font-bold mb-4">Edit Contract</Dialog.Title>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Customer</label>
                            <input
                                type="text"
                                name="customer"
                                value={formData.customer}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Value</label>
                            <input
                                type="text"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        {/* Add a div to wrap the scrollable part */}
                        <div className="mt-4 space-y-4 max-h-[50vh] overflow-y-auto">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <input
                                    type="text"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="mr-2 btn bg-gray-300 text-black hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn bg-primary text-white hover:bg-secondary"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default EditContractModal;
