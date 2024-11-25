import React, { useState } from 'react';

const EditCategoryModal = ({ onClose, data }) => {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Category updated:', formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
                <form onSubmit={handleSubmit}>
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
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <input 
                            type="text" 
                            name="type" 
                            value={formData.type} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Account</label>
                        <input 
                            type="number" 
                            name="account" 
                            value={formData.account} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
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

export default EditCategoryModal;
