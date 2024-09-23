// CreateCustomFieldModal.js
import React, { useState } from 'react';

const CreateCustomFieldModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fieldName: '',
        fieldType: '',
        fieldModule: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Field created:', formData);
        onClose(); // Close modal after submit
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Create Custom Field</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Field Name</label>
                        <input 
                            type="text" 
                            name="fieldName" 
                            value={formData.fieldName} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Field Type</label>
                        <input 
                            type="text" 
                            name="fieldType" 
                            value={formData.fieldType} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Module</label>
                        <input 
                            type="text" 
                            name="fieldModule" 
                            value={formData.fieldModule} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            required 
                        />
                    </div>
                    <div className="flex justify-end">
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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomFieldModal;
