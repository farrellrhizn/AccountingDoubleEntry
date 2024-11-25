import React, { useState, useEffect } from "react";

const EditJournalModal = ({ title, journalData, isEditMode, onClose, onSave }) => {
  const [journalId, setJournalId] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  // Populate fields if editing
  useEffect(() => {
    if (isEditMode && journalData) {
      setJournalId(journalData.journalId);
      setDate(journalData.date);
      setAmount(journalData.amount);
      setDescription(journalData.description);
    } else {
      clearFields();
    }
  }, [journalData, isEditMode]);

  const clearFields = () => {
    setJournalId("");
    setDate("");
    setAmount("");
    setDescription("");
  };

  const handleSave = () => {
    // Validasi atau proses tambahan sebelum menyimpan dapat ditambahkan di sini

    const updatedJournal = {
      journalId,
      date,
      amount: parseFloat(amount),
      description,
    };

    onSave(updatedJournal);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-lg font-bold">{title}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="journalId">
              Journal ID
            </label>
            <input
              type="text"
              id="journalId"
              value={journalId}
              onChange={(e) => setJournalId(e.target.value)}
              className="input input-bordered w-full"
              required
              disabled={isEditMode} // Disable editing Journal ID saat edit
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered w-full"
              required
              min="0"
              step="0.01"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
          <div className="modal-action">
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="btn btn-ghost" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJournalModal;
