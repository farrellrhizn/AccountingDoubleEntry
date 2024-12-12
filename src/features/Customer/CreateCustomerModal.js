import React, { useState } from 'react';

const CreateCustomerModal = ({ isOpen, onClose }) => {
    // State untuk form
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [accountType, setAccountType] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Create Customer</h2>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Code</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Customer Type</label>
                    <select
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        className="input input-bordered w-full"
                    >
                        <option value="">Select</option>
                        <option value="Type1">Type1</option>
                        <option value="Type2">Type2</option>
                    </select>
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        checked={isEnabled}
                        onChange={(e) => setIsEnabled(e.target.checked)}
                        className="mr-2"
                    />
                    <label>Is Enabled</label>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input input-bordered w-full"
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="btn btn-outline">
                        Cancel
                    </button>
                    <button onClick={onClose} className="btn btn-primary">
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCustomerModal;
