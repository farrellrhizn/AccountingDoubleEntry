import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditModalJournal = ({ journal, accounts, onUpdate, onCancel }) => {
  const [journalData, setJournalData] = useState({
    journalNumber: journal.journalNumber || "#JUR00001",
    transactionDate: new Date(journal.transactionDate) || new Date(),
    reference: journal.reference || "Self",
    description: journal.description || "",
    entries: journal.entries || [
      { account: "1060 - Checking Account", debit: 200, credit: 0, description: "" },
      { account: "1200 - Account Receivables", debit: 0, credit: 200, description: "" },
    ],
  });

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...journalData.entries];
    newEntries[index][field] = value;
    setJournalData({ ...journalData, entries: newEntries });
  };

  const handleAddEntry = () => {
    setJournalData({
      ...journalData,
      entries: [...journalData.entries, { account: "", debit: 0, credit: 0, description: "" }],
    });
  };

  const handleUpdate = () => {
    onUpdate(journalData);
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Edit Journal</h2>
        <div className="form-control">
          <label className="label">Journal Number</label>
          <input
            type="text"
            value={journalData.journalNumber}
            disabled
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">Transaction Date</label>
          <DatePicker
            selected={journalData.transactionDate}
            onChange={(date) => setJournalData({ ...journalData, transactionDate: date })}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">Reference</label>
          <input
            type="text"
            value={journalData.reference}
            onChange={(e) => setJournalData({ ...journalData, reference: e.target.value })}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">Description</label>
          <textarea
            value={journalData.description}
            onChange={(e) => setJournalData({ ...journalData, description: e.target.value })}
            className="textarea textarea-bordered"
          ></textarea>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Entries</h3>
          <div className="grid grid-cols-5 gap-4 mt-2">
            <span>Account</span>
            <span>Debit</span>
            <span>Credit</span>
            <span>Description</span>
            <span>Amount</span>
          </div>
          {journalData.entries.map((entry, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 mt-2">
              <select
                value={entry.account}
                onChange={(e) => handleEntryChange(index, "account", e.target.value)}
                className="select select-bordered"
              >
                {accounts.map((acc, i) => (
                  <option key={i} value={acc}>
                    {acc}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={entry.debit}
                onChange={(e) => handleEntryChange(index, "debit", e.target.value)}
                className="input input-bordered"
              />
              <input
                type="number"
                value={entry.credit}
                onChange={(e) => handleEntryChange(index, "credit", e.target.value)}
                className="input input-bordered"
              />
              <input
                type="text"
                value={entry.description}
                onChange={(e) => handleEntryChange(index, "description", e.target.value)}
                className="input input-bordered"
              />
              <input
                type="text"
                value={parseFloat(entry.debit) || parseFloat(entry.credit) || 0}
                disabled
                className="input input-bordered"
              />
            </div>
          ))}
          <button className="btn btn-primary mt-4" onClick={handleAddEntry}>
            + Add Account
          </button>
        </div>
        <div className="modal-action">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModalJournal;
