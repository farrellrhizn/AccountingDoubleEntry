import React, { useState } from 'react';

const EditCustomerModal = ({ customer, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(customer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer updated:', formData);
    onUpdate(formData); // Menyampaikan data yang diperbarui ke parent
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input 
              type="text" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Balance</label>
            <input 
              type="number" 
              name="balance" 
              value={formData.balance} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Login</label>
            <input 
              type="date" 
              name="lastLogin" 
              value={formData.lastLogin} 
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

export default EditCustomerModal;
