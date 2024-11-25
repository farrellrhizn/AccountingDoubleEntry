import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import TitleCard from "../../components/Cards/TitleCard";
import CardOption from "../../components/Cards/CardOption";
import { ACCOUNTSTATEMENT_DATA } from "../../utils/dummyData";
import SubTitleCard from "../../components/Cards/CardSubTitle";
import { useDispatch } from "react-redux"; // Import Redux dispatch
import { showNotification } from "../common/headerSlice"; // Import notification action

const AccountStatementPage = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  // Inisialisasi dengan format string YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];
  const [accstatementData, setAccstatementData] = useState(
    ACCOUNTSTATEMENT_DATA
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAccstatement, setSelectedAccstatement] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [dateValue, setDateValue] = useState({
    startDate: today,
    endDate: today,
  });

  // Logging untuk debugging
  useEffect(() => {
    console.log("dateValue:", dateValue);
  }, [dateValue]);

  // Handle date picker value change
  const handleDatePickerValueChange = (newValue) => {
    console.log("New Datepicker Value:", newValue);
    setDateValue(newValue);
    updateAccountStatementPeriod(newValue); // Trigger the notification
  };

  // Update account statement period and show notification
  const updateAccountStatementPeriod = (newRange) => {
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  const handleSearch = () => {
    console.log("Search clicked");
    // Implement search logic based on dateValue and searchTerm if necessary
  };

  const handleReset = () => {
    setDateValue({
      startDate: today,
      endDate: today,
    });
    setSearchTerm(""); // Reset search term as well
    console.log("Reset clicked");
  };

  const handleEditClick = (accstatement) => {
    setSelectedAccstatement(accstatement);
    setShowModal(true);
  };

  const handleDetailClick = (accstatement) => {
    setSelectedAccstatement(accstatement);
    setShowDetail(true);
  };

  const filteredAccstatement = accstatementData.filter(
    (accstatement) =>
      (accstatement.amount &&
        accstatement.amount.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (accstatement.description &&
        accstatement.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      (new Date(accstatement.date) >= new Date(dateValue.startDate) &&
        new Date(accstatement.date) <= new Date(dateValue.endDate))
  );

  const totalPages = Math.ceil(filteredAccstatement.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, dateValue]);

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
  const paginatedAccstatement = filteredAccstatement.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Logging tambahan untuk melacak rendering
  console.log("Rendering AccountStatementPage...");

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
                primaryColor={"blue"} // Ubah warna sesuai kebutuhan
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
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SubTitleCard
          className="w-full"
          title={"Report :"}
          bottomMargin="mb-4"
        >
          <div className="text-left text-md">Transaction Summary</div>
        </SubTitleCard>
        <SubTitleCard
          className="w-full"
          title={"Type :"}
          bottomMargin="mb-4"
        >
          <div className="text-left text-md">Revenue</div>
        </SubTitleCard>
        <SubTitleCard
          className="w-full"
          title={"Duration :"}
          bottomMargin="mb-4"
        >
          <div className="text-left text-md">
            {new Date(dateValue.startDate).toLocaleDateString()} -{" "}
            {new Date(dateValue.endDate).toLocaleDateString()}
          </div>
        </SubTitleCard>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6">
        <SubTitleCard
          className="w-full"
          bottomMargin="mb-10"
          title={"Chisom Latifat - COBIZ BANK"}
        >
          <div className="text-xl align-bottom">$1,000.00</div>
        </SubTitleCard>

        <SubTitleCard
          className="w-full"
          bottomMargin="mb-10"
          title={"Earl Hane MD - US BANK, NA"}
        >
          <div className="text-xl align-bottom">$2,000.00</div>
        </SubTitleCard>

        <SubTitleCard className="w-full" bottomMargin="mb-10" title={"Cash"}>
          <div className="text-xl align-bottom">$3,000.00</div>
        </SubTitleCard>

        <SubTitleCard
          className="w-full"
          bottomMargin="mb-10"
          title={"Benjamin Adams - ROUNDBANK"}
        >
          <div className="mt-auto text-xl">$10,760.00</div>
        </SubTitleCard>
      </div>

      {/* Manage Invoices Section */}
      <TitleCard topMargin="mt-6" title="Manage Invoices">
        <div className="flex justify-between items-center mb-4">
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
                <th className="min-w-[150px] px-4 py-2 text-xs">DATE</th>
                <th className="min-w-[150px] px-4 py-2 text-xs">AMOUNT</th>
                <th className="min-w-[200px] px-4 py-2 text-xs">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAccstatement.map((accstatement, index) => (
                <tr key={index} className="text-sm">
                  <td className="min-w-[150px]">
                    {new Date(accstatement.date).toLocaleDateString()}
                  </td>
                  <td className="min-w-[150px]">{accstatement.amount}</td>
                  <td className="min-w-[200px] px-4 py-2">
                    {accstatement.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
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
            {Math.min(startIndex + itemsPerPage, filteredAccstatement.length)} of{" "}
            {filteredAccstatement.length} entries
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
      {showDetail && selectedAccstatement && (
        <DetailView
          accstatement={selectedAccstatement} // Pastikan prop yang benar
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

// Komponen DetailView (Pastikan disesuaikan dengan data accstatement)
const DetailView = ({ accstatement, onClose }) => {
  if (!accstatement) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Account Statement Details</h2>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(accstatement.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Amount:</strong> {accstatement.amount}
        </p>
        <p>
          <strong>Description:</strong> {accstatement.description}
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

export default AccountStatementPage;
