import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ensure this is used if navigation is needed
import TitleCard from "../../components/Cards/TitleCard";
import Datepicker from "react-tailwindcss-datepicker";
import CardOption from "../../components/Cards/CardOption";
import { TRANSACTION_DATA } from "../../utils/dummyData";
import SubTitleCard from "../../components/Cards/CardSubTitle";

const TransactionPage = () => {
  const [transactionData, setTransactionData] = useState(TRANSACTION_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleReset = () => {
    setDateValue({
      startDate: new Date(),
      endDate: new Date(),
    });
    setSearchTerm(""); // Reset search term as well
    console.log("Reset clicked");
  };

  const filteredTransaction = transactionData.filter(
    (transaction) =>
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.account.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransaction.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransaction = filteredTransaction.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Partially Paid":
        return "bg-blue-400";
      case "Paid":
        return "bg-green-400";
      case "Sent":
        return "bg-yellow-400";
      default:
        return ""; // Default case (optional)
    }
  };

  return (
    <>
      <CardOption topMargin="mt-2" title={"Select By :"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Date Picker */}
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm font-medium">Date</div>
            <div className="flex items-center">
              <Datepicker
                containerClassName="w-full"
                value={dateValue}
                theme={"light"}
                inputClassName="input input-bordered w-full"
                popoverDirection={"down"}
                toggleClassName="invisible"
                onChange={handleDatePickerValueChange}
                showShortcuts={true}
                primaryColor={"white"}
              />
            </div>
          </div>

          {/* Account Selector */}
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm font-medium">Account</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full">
                <option>Select Account</option>
                <option>Stripe / Paypal</option>
                <option>Cash</option>
                <option>Benjamin Adams</option>
                <option>Chisom Latifat</option>
                <option>Earl Hane MD</option>
                <option>Deborah Hawkins</option>
                <option>Pearl Reed</option>
              </select>
            </div>
          </div>

          {/* Category Selector */}
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm font-medium">Category</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full">
                <option>Select Category</option>
                <option>Bill</option>
                <option>Invoice</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="md:col-span-3 w-72 flex justify-start gap-4">
            <button
              className="btn btn-primary flex-1 text-sm"
              onClick={handleSearch}
            >
              Apply
            </button>
            <button
              className="btn btn-secondary flex-1 text-sm"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </CardOption>

      {/* Report Section */}
      <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <SubTitleCard
          className="w-full"
          topMargin="mt-0"
          bottomMargin="mb-4"
          title={"Report :"}
        >
          <div className="text-left text-md">Transaction Summary</div>
        </SubTitleCard>
        <SubTitleCard
          className="w-full"
          topMargin="mt-0"
          bottomMargin="mb-4"
          title={"Duration :"}
        >
          <div className="text-left text-md">
            {dateValue.startDate.toLocaleDateString()} -{" "}
            {dateValue.endDate.toLocaleDateString()}
          </div>
        </SubTitleCard>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6">
        <SubTitleCard
          className="w-full"
          bottomMargin="mb-4"
          title={"Benjamin Adams - ROUNDBANK"}
        >
          <div className="text-xl">$4,891.87</div>
        </SubTitleCard>

        <SubTitleCard
          className="w-full"
          bottomMargin="mb-4"
          title={"Chisom Latifat - COBIZ BANK"}
        >
          <div className="text-xl">$5,489.20</div>
        </SubTitleCard>

        <SubTitleCard
          className="w-full"
          bottomMargin="mb-4"
          title={"Earl Hane MD - US BANK, NA"}
        >
          <div className="text-xl">$9,202.20</div>
        </SubTitleCard>

        <SubTitleCard
          className="w-full"
          bottomMargin="mb-4"
          title={"Stripe / Paypal"}
        >
          <div className="text-xl">$1,398.72</div>
        </SubTitleCard>
      </div>

      {/* Manage Invoices Section */}
      <TitleCard topMargin="mt-6" title="Manage Invoices">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
          {/* Entries Per Page */}
          <div className="flex items-center space-x-2">
            <label htmlFor="entriesPerPage" className="text-sm font-medium">
              Entries per page:
            </label>
            <select
              id="entriesPerPage"
              className="select select-bordered text-sm"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full sm:w-64 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead>
              <tr>
                <th className="min-w-[120px] px-2 py-2 text-xs">DATE</th>
                <th className="min-w-[120px] px-2 py-2 text-xs">ACCOUNT</th>
                <th className="min-w-[100px] px-2 py-2 text-xs">TYPE</th>
                <th className="min-w-[120px] px-2 py-2 text-xs">CATEGORY</th>
                <th className="min-w-[150px] px-2 py-2 text-xs">DESCRIPTION</th>
                <th className="min-w-[120px] px-2 py-2 text-xs">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransaction.map((transaction, index) => (
                <tr key={index} className="text-sm">
                  <td className="min-w-[150px]">
                    {transaction.date}
                  </td>
                  <td className="min-w-[150px]">
                    {transaction.account}
                  </td>
                  <td className="min-w-[150px]">
                    {transaction.type}
                  </td>
                  <td className="min-w-[150px]">
                    {transaction.category}
                  </td>
                  <td className="min-w-[150px] px-2 py-1">
                    {transaction.description}
                  </td>
                  <td className="min-w-[150px]">
                    {transaction.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0">
          <button
            onClick={handlePrevPage}
            className={`btn bg-primary text-white hover:bg-secondary ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="text-sm">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredTransaction.length)} of{" "}
            {filteredTransaction.length} entries
          </div>
          <button
            onClick={handleNextPage}
            className={`btn bg-primary text-white hover:bg-secondary ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </TitleCard>

      {/* Detail View Modal */}
      {showDetail && selectedTransaction && (
        <DetailView
          proposal={selectedTransaction} // Corrected prop
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

const DetailView = ({ proposal, onClose }) => {
  if (!proposal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Proposal Details</h2>
        <p>
          <strong>Invoice ID:</strong> {proposal.invoice}
        </p>
        <p>
          <strong>Customer:</strong> {proposal.customer}
        </p>
        <p>
          <strong>Category:</strong> {proposal.category}
        </p>
        <p>
          <strong>Issue Date:</strong> {proposal.issueDate}
        </p>
        <p>
          <strong>Status:</strong> {proposal.status}
        </p>
        <button
          onClick={onClose}
          className="mt-4 btn bg-primary text-white hover:bg-secondary w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionPage;
