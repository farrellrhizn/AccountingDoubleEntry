import React, { useState } from 'react';

const EditCustomerModal = ({ isOpen, customer, onClose }) => {
    // State untuk form
    const [formData, setFormData] = useState(customer || {});

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
                <form className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Balance</label>
                        <input
                            type="number"
                            name="balance"
                            value={formData.balance || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Login</label>
                        <input
                            type="date"
                            name="lastLogin"
                            value={formData.lastLogin || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCustomerModal;
