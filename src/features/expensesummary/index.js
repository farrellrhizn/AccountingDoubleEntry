import React, { useState, useEffect } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import CardOption from "../../components/Cards/CardOption";
import LineChartExpense from "./components/LineChartExpense";
import { ACCOUNTSTATEMENT_DATA } from "../../utils/dummyData";
import SubTitleCard from "../../components/Cards/CardSubTitle";
import MonthlyDataTable from "./tabledata/monthlydata";

const ExpenseSumPage = () => {
  const [accstatementData, setAccstatementData] = useState(ACCOUNTSTATEMENT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAccstatement, setSelectedAccstatement] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log("ExpenseSumPage rendered");
    }, []); 

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
        accstatement.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm">Period</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-full text-sm">
                <option>Select Period</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Half Yearly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>

          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm">Year</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-full text-sm">
                <option>Select Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
              </select>
            </div>
          </div>

          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm">Category</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-full text-sm">
                <option>Select Category</option>
                <option>Bussiness Preofit</option>
                <option>Dividends</option>
              </select>
            </div>
          </div>

          <div className="w-full lg:w-auto mr-4 mb-4 lg:mb-0">
            <div className="mb-2 text-sm">Customer</div>
            <div className="flex items-center">
              <select className="select select-bordered w-full lg:w-full text-sm">
                <option>Select Customer</option>
                <option>Keire</option>
                <option>Protiong</option>
              </select>
            </div>
          </div>

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

      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <SubTitleCard className="w-full" title={"Report :"} bottomMargin="mb-4">
          <div className="flex items-center justify-left text-center text-md">
            Expense Summary
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
        <LineChartExpense />
      </div>

      <TitleCard topMargin="mt-6" title="Manage Expense">
        <MonthlyDataTable />
      </TitleCard>
    </>
  );
};

export default ExpenseSumPage;
