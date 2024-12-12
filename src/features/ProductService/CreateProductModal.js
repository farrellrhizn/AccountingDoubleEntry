import React, { useState } from 'react';

const CreateProductModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [tax, setTax] = useState('');
  const [incomeAccount, setIncomeAccount] = useState('');
  const [unit, setUnit] = useState('');
  const [openingStock, setOpeningStock] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Create Product</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-1">
            <label className="block mb-1">Code</label>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="input input-bordered w-full"
            />
            </div>
          <div className="mb-4">
            <label className="block mb-1">Sales Price</label>
            <input
              type="number"
              value={salesPrice}
              onChange={(e) => setSalesPrice(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Purchase Price</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Tax</label>
            <input
              type="number"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Income Account</label>
            <input
              type="text"
              value={incomeAccount}
              onChange={(e) => setIncomeAccount(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Unit</label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Opening Stock</label>
            <input
              type="number"
              value={openingStock}
              onChange={(e) => setOpeningStock(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
