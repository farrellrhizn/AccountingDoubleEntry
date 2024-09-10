import React, { useState, useEffect } from 'react';

const EditProposalModal = ({ showModal, onClose, proposal, onSave }) => {
    const [formData, setFormData] = useState({
        proposal: '',
        customer: '',
        category: '',
        issueDate: '',
        status: ''
    });

    useEffect(() => {
        if (proposal) {
            setFormData({
                proposal: proposal.proposal,
                customer: proposal.customer,
                category: proposal.category,
                issueDate: proposal.issueDate,
                status: proposal.status
            });
        }
    }, [proposal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Proposal</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proposal">
                        Proposal ID
                    </label>
                    <input
                        type="text"
                        name="proposal"
                        value={formData.proposal}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer">
                        Customer
                    </label>
                    <input
                        type="text"
                        name="customer"
                        value={formData.customer}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issueDate">
                        Issue Date
                    </label>
                    <input
                        type="date"
                        name="issueDate"
                        value={formData.issueDate}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                    >
                        <option value="Draft">Draft</option>
                        <option value="Open">Open</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                        <option value="Close">Close</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button onClick={onClose} className="btn mr-2 bg-gray-400 text-white hover:bg-gray-500">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="btn bg-primary text-white hover:bg-secondary">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProposalModal;
