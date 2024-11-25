import React, { useState, useEffect } from 'react';

const EditBillModal = ({ data, onClose }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle edit logic here
        console.log('Bill updated:', formData);
        onClose();
    };

    if (!data) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Bill</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Bill ID</label>
                        <input 
                            type="text" 
                            name="billID" 
                            value={formData.billID} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Vendor</label>
                        <input 
                            type="text" 
                            name="vendor" 
                            value={formData.vendor} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <input 
                            type="number" 
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input 
                            type="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required 
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
                            type="submit" 
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

export default EditBillModal;