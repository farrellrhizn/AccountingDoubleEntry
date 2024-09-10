import React, { useState } from "react";

const UploadCustomerModal = ({ setUploadModalOpen, setCustomers }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate file parsing logic for the customers
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
      setUploadModalOpen(false); // Close the modal after uploading
    } else {
      alert("Please select a file to upload.");
    }
  };

  const handleCancel = () => {
    setUploadModalOpen(false); // Close the modal on cancel
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-6 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          >
            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Customers File
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".csv, .xlsx"
                onChange={handleFileChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mt-4 sm:mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:text-sm"
              >
                Upload Customers
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:text-sm mt-2"
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
