import React from 'react';

const EditModal = ({ showModal, onClose, product }) => {
    if (!showModal) return null; // Jika showModal adalah false, modal tidak akan muncul.

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black-700">Name</label>
                    <input 
                        type="text" 
                        defaultValue={product.name}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-black-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black-700">SKU</label>
                    <input 
                        type="text" 
                        defaultValue={product.sku}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-black-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black-700">Quantity</label>
                    <input 
                        type="number" 
                        defaultValue={product.quantity}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-black-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                    />
                </div>
                <button 
                    onClick={onClose} 
                    className="mt-4 btn btn-primary">
                    Close
                </button>
            </div>
        </div>
    );
};

export default EditModal;
