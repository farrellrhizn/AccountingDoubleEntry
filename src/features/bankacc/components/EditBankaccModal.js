import React, { useState, useEffect } from 'react';

const EditBankaccModal = ({ showModal, onClose, bankacc, onSave }) => {
    const [formData, setFormData] = useState({
        chartOfAccount: '',
        name: '',
        bank: '',
        accountNumber: '',
        currentBalance: '',
        contactNumber: '',
        bankBranch: '',
    });

    useEffect(() => {
        if (bankacc) {
            setFormData({
                chartOfAccount: bankacc.chartOfAccount || '',
                name: bankacc.name || '',
                bank: bankacc.bank || '',
                accountNumber: bankacc.accountNumber || '',
                currentBalance: bankacc.currentBalance || '',
                contactNumber: bankacc.contactNumber || '',
                bankBranch: bankacc.bankBranch || '',
            });
        }
    }, [bankacc]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit Bank Account</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="chartOfAccount" className="block text-sm font-medium">
                            Chart Of Account
                        </label>
                        <input
                            id="chartOfAccount"
                            name="chartOfAccount"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.chartOfAccount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="bank" className="block text-sm font-medium">
                            Bank
                        </label>
                        <input
                            id="bank"
                            name="bank"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.bank}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium">
                            Account Number
                        </label>
                        <input
                            id="accountNumber"
                            name="accountNumber"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.accountNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="currentBalance" className="block text-sm font-medium">
                            Current Balance
                        </label>
                        <input
                            id="currentBalance"
                            name="currentBalance"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.currentBalance}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium">
                            Contact Number
                        </label>
                        <input
                            id="contactNumber"
                            name="contactNumber"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="bankBranch" className="block text-sm font-medium">
                            Bank Branch
                        </label>
                        <input
                            id="bankBranch"
                            name="bankBranch"
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.bankBranch}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="btn btn-secondary mr-2">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBankaccModal;
