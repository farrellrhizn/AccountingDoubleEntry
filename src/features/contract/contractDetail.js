// src/pages/ContractDetail.js
import React from 'react';

const ContractDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Sidebar Section */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-4">
          <ul className="space-y-4">
            <li className="text-green-500 font-bold">General</li>
            <li>Attachment</li>
            <li>Comment</li>
            <li>Notes</li>
          </ul>
        </div>

        {/* Main Section */}
        <div className="col-span-3">
          {/* Header Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-green-500">Attachment</div>
                <div className="text-2xl font-bold">2</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-green-500">Comment</div>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-green-500">Notes</div>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-green-500">Customer Name</div>
                <div className="text-lg font-bold">Keire</div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-bold text-green-500">Description</h2>
            <textarea
              className="w-full border rounded-lg p-4 mt-2"
              rows="10"
              defaultValue="Lorem Ipsum text here..."
            />
          </div>

          {/* Attachments */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-bold text-green-500">Attachments</h2>
            <div className="mt-2">Drop files here to upload</div>
            <div className="mt-4">
              <ul>
                <li className="text-green-500">logo-light.png</li>
                <li className="text-green-500">logo-dark.png</li>
              </ul>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-bold text-green-500">Comments</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong>Qui cupiditate paria</strong> - 1 year ago
              </li>
              <li>
                <strong>Aut mollitia recus</strong> - 1 year ago
              </li>
              <li>
                <strong>Molestiae tempor</strong> - 1 year ago
              </li>
            </ul>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-green-500">Notes</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong>Minus reprehenderit</strong> - 1 year ago
              </li>
              <li>
                <strong>Perferendis perspici</strong> - 1 year ago
              </li>
              <li>
                <strong>Qui asperiores amet</strong> - 1 year ago
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDetail;
