import { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import TitleCard from "../../components/Cards/TitleCard";
import CardUser from "../../components/Cards/CardUser";
import { STAFFUSER_DATA } from "../../utils/dummyData"; // Import dummy data
import AddUserModal from "./components/AddUserModal";
import UserPlusIcon from "@heroicons/react/24/outline/UserPlusIcon";

const iconClasses = `h-5 w-5`;

const TopSideButtons = ({ onAddUser }) => {
  return (
    <div className="flex space-x-2">
      <button
        className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white"
        onClick={() => {
          console.log("Add User Button Clicked"); // Debugging line
          onAddUser();
        }}
      >
        <UserPlusIcon className={iconClasses} />
      </button>
      <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white">
        {"User Log"}
      </button>
    </div>
  );
};

const TopSideButtonsUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuOptionClick = (option) => {
    console.log(`${option} clicked`); // Handle the menu option click
    setIsOpen(false); // Close the menu after selection
  };

  return (
    <div className="relative">
      <button
        className="flex space-x-2 hover:text-primary"
        onClick={toggleMenu}
      >
        <EllipsisVerticalIcon className={iconClasses} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          <ul className="py-1">
            {["Edit", "Delete", "Reset Password", "Login Disable"].map(
              (option) => (
                <li
                  key={option}
                  className="block px-6 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer text-sm rounded-lg"
                  onClick={() => handleMenuOptionClick(option)}
                >
                  {option}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function StaffUser() {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);

  const openAddUserModal = () => {
    console.log("openAddUserModal called"); // Debugging line
    setAddUserModalOpen(true);
  };

  const closeAddUserModal = () => {
    setAddUserModalOpen(false);
  };

  return (
    <>
      <TitleCard
        title="Staff User"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons onAddUser={openAddUserModal} />}
      >
        {/* Adding grid with 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {STAFFUSER_DATA.map((user, index) => (
            <CardUser
              key={index}
              title={
                <button className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {user.role}
                </button>
              }
              topMargin="mt-2"
              TopSideButtonsUser={
                <div className="m-2">
                  <TopSideButtonsUser />
                </div>
              }
            >
              <div className="flex flex-col items-center mt-6">
                <img
                  className="w-20 h-20 rounded-full"
                  src={user.image}
                  alt={user.name}
                />
                <h2 className="mt-4 text-xl font-semibold text-primary">
                  {user.name}
                </h2>
                <p className="mt-2 text-gray-500">{user.email}</p>
              </div>
            </CardUser>
          ))}
        </div>
      </TitleCard>

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <AddUserModal isOpen={isAddUserModalOpen} onClose={closeAddUserModal} />
      )}
    </>
  );
}
