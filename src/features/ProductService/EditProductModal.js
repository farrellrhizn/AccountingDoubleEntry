import React, { useState } from 'react';

const EditProductModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product updated:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
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
            <label className="block text-sm font-medium text-gray-700">Code</label>
            <input 
              type="text" 
              name="code" 
              value={formData.code} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Sales Price</label>
            <input 
              type="number" 
              name="salesPrice" 
              value={formData.salesPrice} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Purchase Price</label>
            <input 
              type="number" 
              name="purchasePrice" 
              value={formData.purchasePrice} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tax</label>
            <input 
              type="number" 
              name="tax" 
              value={formData.tax} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Income Account</label>
            <input 
              type="text" 
              name="incomeAccount" 
              value={formData.incomeAccount} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Unit</label>
            <input 
              type="text" 
              name="unit" 
              value={formData.unit} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Opening Stock</label>
            <input 
              type="number" 
              name="openingStock" 
              value={formData.openingStock} 
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

export default EditProductModal;
