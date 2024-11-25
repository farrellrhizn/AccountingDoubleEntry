// ViewCustomerModal.jsx
import React from 'react';

const ViewCustomerModal = ({ customer, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-xl font-semibold mb-4">View Customer</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{customer.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{customer.contact}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{customer.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Balance</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{customer.balance}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Last Login</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">{customer.lastLogin}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomerModal;
