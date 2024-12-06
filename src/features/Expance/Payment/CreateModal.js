import React, { useState } from 'react';

const CreatePaymentModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    account: '',
    vendor: '',
    description: '',
    category: '',
    reference: '',
    paymentReceipt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      paymentReceipt: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Created:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Create New Payment</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date*</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount*</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Account*</label>
            <select
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">- Select Account -</option>
              <option value="Cash">Cash</option>
              <option value="Bank">Bank</option>
            </select>
          </div>
          {/* Vendor */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Vendor*</label>
            <select
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">--</option>
              <option value="Vendor 1">Vendor 1</option>
              <option value="Vendor 2">Vendor 2</option>
            </select>
          </div>
          {/* Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              rows="3"
            />
          </div>
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category*</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">- Select Category -</option>
              <option value="Insurance">Insurance</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
          {/* Reference */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Reference</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Payment Receipt */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Payment Receipt</label>
            <input
              type="file"
              name="paymentReceipt"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Buttons */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePaymentModal;
