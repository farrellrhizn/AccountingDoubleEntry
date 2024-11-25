// src/pages/JournalAcc.jsx
import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import { JOURNAL_ACCOUNTS } from "../../utils/dummyData";
import EditJournalModal from "./components/EditJournalModal";
import DeleteJournalModal from "./components/DeleteJournalModal"; // Import DeleteJournalModal
import { showNotification } from "../common/headerSlice";
import { useNavigate } from "react-router-dom";

const TopSideButtons = ({ onOpenAddNewJournal }) => {
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-4 btn-sm normal-case btn-primary justify-center"
        onClick={onOpenAddNewJournal}
      >
        Add New
      </button>
    </div>
  );
};

export default function JournalAcc() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [allJournals, setAllJournals] = useState(JOURNAL_ACCOUNTS);
  const [journals, setJournals] = useState(JOURNAL_ACCOUNTS);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentJournal, setCurrentJournal] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [journalToDelete, setJournalToDelete] = useState(null);

  useEffect(() => {
    const newTotalPages = Math.ceil(journals.length / entriesPerPage);
    setTotalPages(newTotalPages);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages || 1);
    }
  }, [journals, entriesPerPage, currentPage]);

  useEffect(() => {
    const filteredJournals = allJournals.filter((journal) => {
      const searchText = searchTerm.toLowerCase();
      return (
        journal.journalId.toLowerCase().includes(searchText) ||
        moment(journal.date).format("DD MMM YY").toLowerCase().includes(searchText) ||
        journal.amount.toString().includes(searchText) ||
        journal.description.toLowerCase().includes(searchText)
      );
    });
    setJournals(filteredJournals);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, allJournals]);

  const removeFilter = () => {
    setSearchTerm("");
    setJournals(allJournals);
  };

  const handleDetailClick = (journal) => {
    console.log("Navigating to journal detail with ID:", journal.id); // Debugging
    window.location.href = "./JournalDetail";
  };

  const handleDelete = () => {
    if (journalToDelete) {
      const updatedAllJournals = allJournals.filter(
        (journal) => journal.journalId !== journalToDelete.journalId
      );
      setAllJournals(updatedAllJournals);
      setIsDeleteModalOpen(false);
      setJournalToDelete(null);
      dispatch(
        showNotification({
          message: `Journal "${journalToDelete.journalId}" has been deleted.`,
          status: 1, // Assuming status 1 is for success
        })
      );
    }
  };

  const openEditModal = (index) => {
    setCurrentJournal(journals[index]);
    setIsEditModalOpen(true);
  };

  const openAddNewJournal = () => {
    setCurrentJournal(null); // Clear current journal for new entry
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (journal) => {
    setJournalToDelete(journal);
    setIsDeleteModalOpen(true);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when entries per page changes
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedJournals = journals.slice(startIndex, startIndex + entriesPerPage);

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentJournal(null);
  };

  const handleSaveModal = (updatedJournal) => {
    if (currentJournal) {
      const updatedAllJournals = allJournals.map((journal) =>
        journal.journalId === currentJournal.journalId ? updatedJournal : journal
      );
      setAllJournals(updatedAllJournals);
      
      dispatch(
        showNotification({
          message: `Journal "${updatedJournal.journalId}" has been successfully edited!`,
          status: 1, // Assuming status 1 is for success
        })
      );
    } else {
      const newAllJournals = [updatedJournal, ...allJournals];
      setAllJournals(newAllJournals);
      
      dispatch(
        showNotification({
          message: `Journal "${updatedJournal.journalId}" has been successfully added!`,
          status: 1, // Assuming status 1 is for success
        })
      );
    }

    handleCloseEditModal();
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setJournalToDelete(null);
  };

  return (
    <>
      <TitleCard
        title="Manage Journal"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons onOpenAddNewJournal={openAddNewJournal} />}
      >
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
                    <tr key={journal.journalId}>
                      <td>
                        <button
                          className="btn bg-transparent border-primary hover:bg-primary hover:text-white"
                          onClick={() => handleDetailClick(journal)}
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
                          aria-label={`Edit journal ${journal.journalId}`} // Added aria-label for accessibility
                        >
                          <PencilIcon className="h-5 w-5 text-primary group-hover:text-white" />
                        </button>
                        <button
                          className="m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                          onClick={() => openDeleteModal(journal)}
                          aria-label={`Delete journal ${journal.journalId}`} // Added aria-label for accessibility
                        >
                          <TrashIcon className="h-5 w-5 text-primary group-hover:text-white" />
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

      {/* Edit Modal rendering */}
      {isEditModalOpen && (
        <EditJournalModal
          title={currentJournal ? "Edit Journal" : "Add New Journal"}
          journalData={currentJournal}
          isEditMode={!!currentJournal}
          onClose={handleCloseEditModal}
          onSave={handleSaveModal}
        />
      )}

      {/* Delete Modal rendering */}
      {isDeleteModalOpen && (
        <DeleteJournalModal
          journalData={journalToDelete}
          onClose={handleCloseDeleteModal}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}
