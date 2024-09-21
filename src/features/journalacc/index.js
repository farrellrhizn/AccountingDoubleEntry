import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import { JOURNAL_ACCOUNTS } from "../../utils/dummyData";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewLeadModal = () => {
    dispatch(openModal({ title: "Add New Journal", bodyType: MODAL_BODY_TYPES.DEFAULT }));
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-4 btn-sm normal-case btn-primary justify-center"
        onClick={openAddNewLeadModal}
      >
        Add New
      </button>
    </div>
  );
};

export default function JournalAcc() {
  const dispatch = useDispatch();
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [journals, setJournals] = useState(JOURNAL_ACCOUNTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Update totalPages whenever journals or entriesPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(journals.length / entriesPerPage));
    // Ensure currentPage is within bounds
    if (currentPage > Math.ceil(journals.length / entriesPerPage)) {
      setCurrentPage(Math.ceil(journals.length / entriesPerPage) || 1);
    }
  }, [journals, entriesPerPage, currentPage]);

  // Handle search term changes and filter journals
  useEffect(() => {
    handleSearchTerm();
    setCurrentPage(1); // Reset to first page on search
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleSearchTerm = () => {
    const filteredJournals = JOURNAL_ACCOUNTS.filter((journal) => {
      const searchText = searchTerm.toLowerCase();
      return (
        journal.journalId.toLowerCase().includes(searchText) ||
        moment(journal.date).format("DD MMM YY").toLowerCase().includes(searchText) ||
        journal.amount.toString().includes(searchText) ||
        journal.description.toLowerCase().includes(searchText)
      );
    });
    setJournals(filteredJournals);
  };

  const removeFilter = () => {
    setJournals(JOURNAL_ACCOUNTS);
    setSearchTerm("");
  };

  const getDummyStatus = (index) => {
    switch (index % 5) {
      case 0:
        return <div className="badge">Not Interested</div>;
      case 1:
        return <div className="badge badge-primary">In Progress</div>;
      case 2:
        return <div className="badge badge-secondary">Sold</div>;
      case 3:
        return <div className="badge badge-accent">Need Followup</div>;
      default:
        return <div className="badge badge-ghost">Open</div>;
    }
  };

  const handleDelete = (index) => {
    const updatedJournals = journals.filter((_, i) => i !== index);
    setJournals(updatedJournals);
  };

  const openEditModal = (index) => {
    dispatch(openModal({ 
      title: "Edit Journal", 
      bodyType: MODAL_BODY_TYPES.JOURNAL_EDIT, 
      extraObject: { index } 
    }));
  };

  const openJournalDetail = (index) => {
    dispatch(openModal({ 
      title: "Journal Detail", 
      bodyType: MODAL_BODY_TYPES.JOURNAL_DETAIL, 
      extraObject: { index } 
    }));
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when entries per page changes
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Pagination Logic
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedJournals = journals.slice(startIndex, startIndex + entriesPerPage);

  return (
    <>
      <TitleCard title="Manage Journal" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
        <div>
          {/* Search and Entries Per Page */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <label htmlFor="entriesPerPage" className="mr-2 text-sm font-medium">
                Entries per page:
              </label>
              <select
                id="entriesPerPage"
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="select select-bordered w-full md:w-auto"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="w-full md:w-64 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
                placeholder="Search..."
                className="input input-bordered w-full pr-10"
              />
              {searchTerm && (
                <button
                  onClick={removeFilter}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-sm btn-ghost"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Journal Table */}
          <div className="overflow-x-auto w-full">
            <table className="table w-full min-w-max">
              <thead>
                <tr>
                  <th>Journal ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedJournals.length > 0 ? (
                  paginatedJournals.map((journal, index) => (
                    <tr key={startIndex + index}>
                      <td>
                        <button
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white"
                          onClick={() => openJournalDetail(startIndex + index)}
                        >
                          {journal.journalId}
                        </button>
                      </td>
                      <td>{moment(journal.date).format("DD MMM YY")}</td>
                      <td>${journal.amount.toLocaleString()}</td>
                      <td>{journal.description}</td>
                      <td className="flex justify-center">
                        <button
                          className="m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                          onClick={() => openEditModal(startIndex + index)}
                        >
                          <PencilIcon className="h-5 w-5 text-primary group-hover:text-white" />
                        </button>
                        <button
                          className="m-2 btn bg-transparent border-secondary hover:bg-secondary hover:text-white group"
                          onClick={() => handleDelete(startIndex + index)}
                        >
                          <TrashIcon className="h-5 w-5 text-secondary group-hover:text-white" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No journals found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination and Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          {/* Information */}
          <div className="text-sm text-gray-700">
            Showing {journals.length === 0 ? 0 : startIndex + 1} to{" "}
            {Math.min(startIndex + entriesPerPage, journals.length)} of {journals.length} entries
          </div>
          {/* Pagination Controls */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrevPage}
              className={`btn bg-primary text-white hover:bg-secondary ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className={`btn bg-primary text-white hover:bg-secondary ${
                currentPage === totalPages || totalPages === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </button>
          </div>
        </div>
      </TitleCard>
    </>
  );
}
