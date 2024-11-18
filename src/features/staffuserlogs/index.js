import React, { useState } from "react";
import {
  PencilIcon,
  KeyIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import TitleCard from "../../components/Cards/TitleCard";
import CardOption from "../../components/Cards/CardOption";
import Datepicker from "react-tailwindcss-datepicker";
import { STAFFUSERDATA_LOGS } from "../../utils/dummyData";

const StaffUserLogs = () => {
  const [data, setData] = useState(STAFFUSERDATA_LOGS);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menghapus entri
  const handleDeleteEntry = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  // Fungsi untuk mengatur jumlah entri per halaman
  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
  };

  // Fungsi untuk memfilter data berdasarkan pengguna
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // Fungsi untuk memfilter data berdasarkan bulan
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Fungsi untuk menangani input pencarian
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter data berdasarkan pengguna, tanggal, dan query pencarian di semua kolom
  const filteredData = data.filter((user) => {
    const matchesUser = selectedUser === "All" || user.name === selectedUser;
    const matchesDate =
      !selectedDate ||
      (new Date(user.lastLogin).getMonth() ===
        new Date(selectedDate.startDate).getMonth() &&
        new Date(user.lastLogin).getFullYear() ===
          new Date(selectedDate.startDate).getFullYear());

    const matchesSearch = Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    );

    return matchesUser && matchesDate && matchesSearch;
  });

  return (
    <>
      <CardOption topMargin="mt-2" title={"Select By :"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <div className="mb-3 text-sm">Month & Year</div>
            <Datepicker
              containerClassName="w-full md:w-96"
              theme={"light"}
              inputClassName="input input-bordered w-full text-sm"
              popoverDirection={"down"}
              toggleClassName="invisible"
              showShortcuts={true}
              primaryColor={"white"}
              views={["year", "month"]}
              dateFormat="MM/yyyy"
              onChange={(date) => handleDateChange(date)}
            />
          </div>
          <div>
            <div className="mb-3 text-sm">Users</div>
            <select
              className="select select-bordered w-full md:w-96 text-sm"
              value={selectedUser}
              onChange={handleUserChange}
            >
              <option>All</option>
              {STAFFUSERDATA_LOGS.map((user, index) => (
                <option key={index} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-3 flex w-72 justify-start gap-4">
            <button className="btn btn-primary flex-1 text-sm">Apply</button>
            <button
              className="btn btn-secondary flex-1 text-sm"
              onClick={() => {
                setSelectedUser("All");
                setSelectedDate(null);
                setSearchQuery("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </CardOption>

      <TitleCard topMargin="mt-2" title="Manage Proposals">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center w-full md:w-auto">
            <select
              id="entriesPerPage"
              className="select select-bordered text-sm w-full md:w-auto"
              value={entriesPerPage}
              onChange={handleEntriesPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
              <label htmlFor="entriesPerPage" className="ml-2 text-sm">
                Entries per page:
              </label>
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full text-sm"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead>
              <tr>
                <th className="px-4 py-2">USER</th>
                <th className="px-4 py-2">ROLE</th>
                <th className="px-4 py-2">IP</th>
                <th className="px-4 py-2">LAST LOGIN</th>
                <th className="px-4 py-2">COUNTRY</th>
                <th className="px-4 py-2">DEVICE TYPE</th>
                <th className="px-4 py-2">OS</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(0, entriesPerPage).map((user, index) => (
                <tr key={index}>
                  <td className="text-sm flex items-center gap-2">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {user.name}
                  </td>
                  <td className="text-sm truncate">{user.role}</td>
                  <td className="text-sm truncate">{user.ip}</td>
                  <td className="text-sm truncate">{user.lastLogin}</td>
                  <td className="text-sm truncate">{user.country}</td>
                  <td className="text-sm truncate">{user.deviceType}</td>
                  <td className="text-sm truncate">{user.os}</td>
                  <td className="text-sm text-right">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="View User"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2"
                        aria-label="Delete User"
                        onClick={() => handleDeleteEntry(index)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="text-sm text-gray-700">
            Showing 1 to {Math.min(entriesPerPage, filteredData.length)} of{" "}
            {filteredData.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              className="btn bg-primary text-white hover:bg-secondary opacity-50 cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button className="btn bg-primary text-white hover:bg-secondary">
              Next
            </button>
          </div>
        </div>
      </TitleCard>
    </>
  );
};

export default StaffUserLogs;
