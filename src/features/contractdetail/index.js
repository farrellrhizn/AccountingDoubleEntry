import React, { useRef, useState, useEffect } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";

const ContractDetail = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("general");
  const generalRef = useRef(null);
  const attachmentRef = useRef(null);
  const commentRef = useRef(null);
  const notesRef = useRef(null);

  const handleScroll = () => {
    const refs = {
      general: generalRef.current,
      attachment: attachmentRef.current,
      comment: commentRef.current,
      notes: notesRef.current,
    };

    for (let [key, ref] of Object.entries(refs)) {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveSection(key);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <div className="sticky top-16">
          <ul className="bg-white shadow rounded-lg p-4">
            <li
              className={`mb-4 cursor-pointer ${
                activeSection === "general" ? "text-primary font-bold" : ""
              }`}
            >
              <Link to="#general">General</Link>
            </li>
            <li
              className={`mb-4 cursor-pointer ${
                activeSection === "attachment" ? "text-primary font-bold" : ""
              }`}
            >
              <Link to="#attachment">Attachment</Link>
            </li>
            <li
              className={`mb-4 cursor-pointer ${
                activeSection === "comment" ? "text-primary font-bold" : ""
              }`}
            >
              <Link to="#comment">Comment</Link>
            </li>
            <li
              className={`mb-4 cursor-pointer ${
                activeSection === "notes" ? "text-primary font-bold" : ""
              }`}
            >
              <Link to="#notes">Notes</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 ml-8">
        <div className="mt-6">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Back
          </button>
        </div>
        {/* General Section */}
        <div
          ref={generalRef}
          id="general"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-green-100 p-4 rounded shadow-md">
            <p className="font-bold text-green-600">Attachment</p>
            <p className="text-3xl">2</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <p className="font-bold text-yellow-600">Comment</p>
            <p className="text-3xl">3</p>
          </div>
          <div className="bg-orange-100 p-4 rounded shadow-md">
            <p className="font-bold text-orange-600">Notes</p>
            <p className="text-3xl">3</p>
          </div>
          </div>
          <TitleCard title="Customer Info">
            <div className="flex justify-between mb-4">
              <ul className="list-disc pl-4">
                <li>
                  <strong>Customer Name:</strong> Keire
                </li>
                <li>
                  <strong>Subject:</strong> Quos dolor
                </li>
                <li>
                  <strong>Value:</strong> $32.00
                </li>
                <li>
                  <strong>Start Date:</strong> Sep 22, 2022
                </li>
                <li>
                  <strong>End Date:</strong> Aug 25, 1988
                </li>
                <li>
                  <strong>Status:</strong> Accept
                </li>
              </ul>
            </div>
          </TitleCard>
        
        {/* Description Section */}
        <div className="mt-8">
          <TitleCard title="Description">
            <div className="flex justify-between mb-4">
              <ReactQuill theme="snow" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded ml-4">
                Generate with AI
              </button>
            </div>
          </TitleCard>
        </div>

        {/* Attachments Section */}
        <div ref={attachmentRef} id="attachment" className="mt-8">
          <TitleCard title="Attachments">
            <div className="border border-dashed border-gray-400 p-8 text-center mb-4">
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded">Drop or upload files here</button>
            </div>
            <div className="bg-white p-4 rounded shadow-md flex justify-between mb-4">
              <p>logo-light.png (0.00 MB)</p>
              <div className="space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"><TrashIcon className="h-5 w-5"/></button>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"><ArrowDownTrayIcon className="h-5 w-5"/></button>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"><EyeIcon className="h-5 w-5"/></button>
              </div>
            </div>
          </TitleCard>
        </div>

        {/* Comments Section */}
        <div ref={commentRef} id="comment" className="mt-8">
          <TitleCard title="Comments">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Add a comment..."
              />
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <p>Qui cupiditate paria</p>
              <p className="text-sm text-gray-500">2 years ago</p>
            </div>
          </TitleCard>
        </div>

        {/* Notes Section */}
        <div ref={notesRef} id="notes" className="mt-8">
          <TitleCard title="Notes">
            <div className="mb-4 flex justify-between">
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded">
                Grammar check with AI
              </button>
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded">
                Generate with AI
              </button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Add a note..."
              />
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <p>Minus reprehenderit</p>
              <p className="text-sm text-gray-500">2 years ago</p>
            </div>
          </TitleCard>
        </div>
      </div>
    </div>
  );
};

export default ContractDetail;
