import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const AddUserModal = ({ isOpen, onClose }) => {
  const [loginEnabled, setLoginEnabled] = useState(false);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const toggleLogin = () => {
    setLoginEnabled(!loginEnabled);
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      dateValue,
      loginEnabled,
    });
    // Add logic to handle form submission, e.g., API call
    onClose(); // Close the modal after submission
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="modal-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg relative z-10">
        <div className="modal-header flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create New User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Enter User Name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                placeholder="Enter User Email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">
                User Role
              </label>
              <select
                id="userRole"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="accountant">Accountant</option>
                {/* Add more roles as needed */}
              </select>
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700 mr-4">
                Login is enabled
              </label>
              <input
                type="checkbox"
                checked={loginEnabled}
                onChange={toggleLogin}
                className="toggle-checkbox"
              />
            </div>
            {loginEnabled && (
              <div className="col-span-2">
                <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="userPassword"
                  placeholder="Enter User Password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            )}
            <div className="col-span-2">
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date Of Birth
              </label>
              <Datepicker
                containerClassName="w-full"
                value={dateValue}
                theme={"light"}
                inputClassName="input input-bordered w-full"
                popoverDirection={"down"}
                toggleClassName="invisible"
                onChange={handleDateChange}
                showShortcuts={true}
                primaryColor={"white"}
              />
            </div>
          </div>
          <div className="modal-footer mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
