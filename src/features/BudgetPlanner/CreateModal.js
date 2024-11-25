import React, { useState } from 'react';

const CreateModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    budget: ''
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
    console.log('Item created:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Create New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">From</label>
            <input 
              type="text" 
              name="from" 
              value={formData.from} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Budget</label>
            <input 
              type="text" 
              name="budget" 
              value={formData.budget} 
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

export default CreateModal;
