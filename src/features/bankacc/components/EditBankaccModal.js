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
        onSave(formData);  // Mengirim data ke fungsi onSave dari induk
        onClose();  // Menutup modal setelah penyimpanan
    };

    if (!showModal) return null;

    const fields = [
        { id: 'chartOfAccount', label: 'Chart Of Account' },
        { id: 'name', label: 'Name' },
        { id: 'bank', label: 'Bank' },
        { id: 'accountNumber', label: 'Account Number' },
        { id: 'currentBalance', label: 'Current Balance' },
        { id: 'contactNumber', label: 'Contact Number' },
        { id: 'bankBranch', label: 'Bank Branch' },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-4 h-auto max-h-screen md:w-1/2 md:h-3/4 flex flex-col">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold">Edit Bank Account</h2>
                </div>
                <div className="p-4 overflow-y-auto flex-1">
                    <div className="space-y-4">
                        {fields.map((field) => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    name={field.id}
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={formData[field.id]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 border-t flex justify-end space-x-2">
                    <button onClick={onClose} className="btn btn-secondary">
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
