import React, { useState } from "react";

const UploadCustomerModal = ({ onClose, setCustomers }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate file parsing logic for customers
      const newCustomers = [
        {
          name: "New Customer 1",
          email: "newcustomer1@example.com",
          phone: "123-456-7890",
          company: "Company A",
          address: "123 Street, City, Country",
        },
        {
          name: "New Customer 2",
          email: "newcustomer2@example.com",
          phone: "987-654-3210",
          company: "Company B",
          address: "456 Avenue, City, Country",
        },
      ];

      // Add new customers to the existing customer list
      setCustomers((prevCustomers) => [...prevCustomers, ...newCustomers]);
      onClose(); // Close the modal after uploading
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          >
            <h2 className="text-xl font-semibold mb-4">Upload Customers File</h2>
            <div className="mb-4">
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700"
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".csv, .xlsx"
                onChange={handleFileChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
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

export default UploadCustomerModal;
