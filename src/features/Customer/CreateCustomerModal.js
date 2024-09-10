import React, { useState } from "react";
import { createCustomer } from "../../utils/dummyData";

const CreateCustomerModal = ({ setCreateModalOpen, customers, setCustomers }) => {
  const [customerData, setCustomerData] = useState({
    name: "",
    contact: "",
    email: "",
    balance: "",
    lastLogin: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = createCustomer(customerData);
    setCustomers([...customers, newCustomer]);
    setCreateModalOpen(false);
  };

  const handleCancel = () => {
    setCreateModalOpen(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                required
                value={customerData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                name="contact"
                type="text"
                required
                value={customerData.contact}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                required
                value={customerData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Balance</label>
              <input
                name="balance"
                type="number"
                required
                value={customerData.balance}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Login</label>
              <input
                name="lastLogin"
                type="date"
                value={customerData.lastLogin}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div className="mt-4 sm:mt-6">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:text-sm"
                >
                  Create Customer
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 sm:text-sm mt-2"
                >
                  Cancel
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomerModal;
