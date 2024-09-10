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

  useEffect(() => {
    handleSearchTerm();
  }, [searchTerm]);

  const removeFilter = () => {
    setJournals(JOURNAL_ACCOUNTS);
  };

  const getDummyStatus = (index) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };

  // Fungsi untuk menghapus jurnal
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
    setSearchTerm("");
    console.log("Reset clicked");
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  return (
    <>
      <TitleCard title="Manage Journal" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
        <div>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <select
                id="entriesPerPage"
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="select select-bordered"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              <label htmlFor="entriesPerPage" className="ml-2">
                Entries per page:
              </label>
            </div>
            <div className="ml-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
                placeholder="Search..."
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table w-full">
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
                {journals.map((l, k) => (
                  <tr key={k}>
                    <td>
                      <button
                        className="btn bg bg-transparent border-primary hover:bg-primary hover:text-white"
                        onClick={() => openJournalDetail(l.journalId)}
                      >
                        {l.journalId}
                      </button>
                    </td>
                    <td>{moment(l.date).format("DD MMM YY")}</td>
                    <td>${l.amount}</td>
                    <td>{l.description}</td>
                    <td>
                      <button
                        className="m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group"
                        onClick={() => openEditModal(k)}
                      >
                        <PencilIcon className="h-5 w-5 text-primary group-hover:text-white" />
                      </button>
                      <button
                        className="m-2 btn bg-transparent border-secondary hover:bg-secondary hover:text-white group"
                        onClick={() => handleDelete(k)}
                      >
                        <TrashIcon className="h-5 w-5 text-secondary group-hover:text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TitleCard>
    </>
  );
}
