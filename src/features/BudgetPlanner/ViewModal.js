import React from 'react';

const ViewModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">View Item</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="mt-1">{item.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">From</label>
          <p className="mt-1">{item.from}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Budget Period</label>
          <p className="mt-1">{item.budget}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button 
            type="button" 
            onClick={onClose} 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
