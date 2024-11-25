import React, { useState, useEffect } from "react";

const EditForm = ({ account, onClose, onUpdate }) => {
    const [name, setName] = useState(account.name);
    const [code, setCode] = useState(account.code);
    const [description, setDescription] = useState(account.description);
    const [isEnabled, setIsEnabled] = useState(account.isEnabled);

    useEffect(() => {
        setName(account.name);
        setCode(account.code);
        setDescription(account.description);
        setIsEnabled(account.isEnabled);
    }, [account]);

    const handleUpdate = () => {
        const updatedAccount = {
            ...account,
            name,
            code,
            description,
            isEnabled,
        };
        onUpdate(updatedAccount);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-50 p-4">
            <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
                <h2 className="text-xl mb-4">Edit Account</h2>
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
                    <button onClick={onClose} className="btn btn-outline">Cancel</button>
                    <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditForm;
