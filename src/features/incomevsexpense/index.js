import React, { useState, useEffect } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import CardOption from "../../components/Cards/CardOption";
import LineChartInEx from "./components/LineChartInEx";
import { ACCOUNTSTATEMENT_DATA } from "../../utils/dummyData";
import SubTitleCard from "../../components/Cards/CardSubTitle";
import MonthlyDataTable from "./tabledata/monthlydata";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const IncomeVSExpense = () => {
  const [accstatementData, setAccstatementData] = useState(
    ACCOUNTSTATEMENT_DATA
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAccstatement, setSelectedAccstatement] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleReset = () => {
    setSearchTerm("");
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
          .includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredAccstatement.length / itemsPerPage);

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
  const paginatedAccstatement = filteredAccstatement.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <CardOption topMargin="mt-2" title={"Select By :"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Income Period */}
          <div className="w-full md:w-auto sm:mr-4">
            <label className="block mb-2 text-sm">Income Period</label>
            <select className="select select-bordered w-full md:w-full text-sm">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Half Yearly</option>
              <option>Yearly</option>
            </select>
          </div>

          {/* Year */}
          <div className="w-full md:w-auto sm:mr-4">
            <label className="block mb-2 text-sm">Year</label>
            <select className="select select-bordered w-full md:w-full text-sm">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>

          {/* Category */}
          <div className="w-full md:w-auto sm:mr-4">
            <label className="block mb-2 text-sm">Category</label>
            <select className="select select-bordered w-full md:w-full text-sm">
              <option>Select Category</option>
              <option>Business Profit</option>
              <option>Dividends</option>
            </select>
          </div>

          {/* Customer */}
          <div className="w-full md:w-auto sm:mr-4">
            <label className="block mb-2 text-sm">Customer</label>
            <select className="select select-bordered w-full md:w-full text-sm">
              <option>Select Customer</option>
              <option>Keire</option>
              <option>Protiong</option>
            </select>
          </div>

          {/* Vendor */}
          <div className="w-full md:w-auto sm:mr-4">
            <label className="block mb-2 text-sm">Vendor</label>
            <select className="select select-bordered w-full md:w-full text-sm">
              <option>Select Vendor</option>
              <option>Anthony B Renfoe</option>
              <option>Kim J Gibson</option>
              <option>Adrienne J Reed</option>
              <option>Eugene A Hughes</option>
              <option>Pearl W Poole</option>
            </select>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <SubTitleCard className="w-full" title={"Report :"} bottomMargin="mb-4">
          <div className="flex items-center justify-left text-center text-md">
            Transaction Summary
          </div>
        </SubTitleCard>
        <SubTitleCard
          className="w-full"
          title={"Duration :"}
          bottomMargin="mb-4"
        >
          <div className="flex items-center justify-left text-center text-md">
            -
          </div>
        </SubTitleCard>
      </div>

      <div>
        <LineChartInEx />
      </div>

      <TitleCard topMargin="mt-6" title="Manage Invoices">
        <MonthlyDataTable />
      </TitleCard>
    </>
  );
};

export default IncomeVSExpense;
