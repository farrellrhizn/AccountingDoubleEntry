import React, { useState } from 'react';

const CreateRevenueModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    account: '',
    customer: '',
    category: '',
    reference: '',
    description: '',
    receipt: ''
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
    console.log('Revenue Created:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Create Revenue</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={key === 'amount' ? 'number' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
          ))}
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

export default CreateRevenueModal;
