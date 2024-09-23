import React, { useState } from 'react';

const CreateRetainerModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        retainer: '',
        customer: '',
        category: '',
        issueDate: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New retainer created:', formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Create Retainer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Retainer ID</label>
                        <input 
                            type="text" 
                            name="retainer" 
                            value={formData.retainer} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
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
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={formData.category} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Issue Date</label>
                        <input 
                            type="date" 
                            name="issueDate" 
                            value={formData.issueDate} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
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
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required 
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRetainerModal;
