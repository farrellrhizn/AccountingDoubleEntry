import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleCard from '../../components/Cards/TitleCard';

const ProposalDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleCard topMargin="mt-2" title="Proposal">
        {/* Status Progress Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Create Proposal */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-xl">
              +
            </div>
            <p className="font-bold text-green-500 mt-2">Create Proposal</p>
            <p className="text-gray-500 text-sm">Created on Nov 9, 2022</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
              Edit
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="h-1 w-1/4 bg-gray-300 mx-4"></div>
          {/* Send Proposal */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8V7a4 4 0 10-8 0v1M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-bold text-yellow-500 mt-2">Send Proposal</p>
            <p className="text-gray-500 text-sm">Sent on Oct 6, 2024</p>
          </div>
          {/* Horizontal Line */}
          <div className="h-1 w-1/4 bg-gray-300 mx-4"></div>
          {/* Proposal Status */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-5l7 3-7 3z" />
              </svg>
            </div>
            <p className="font-bold text-blue-500 mt-2">Proposal Status</p>
            <p className="text-gray-500 text-sm">Open</p>
          </div>
        </div>
        </TitleCard>

        {/* Resend and Download Buttons */}
        <div className="flex justify-end m-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-4">
            Resend Proposal
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-4">
            Download
          </button>
          <select className="bg-white border border-gray-300 rounded px-4 py-2">
            <option>Open</option>
            <option>Closed</option>
            <option>In Review</option>
          </select>
        </div>

        <TitleCard>
        {/* Proposal Details */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold">Billed To :</h2>
            <p>Keire</p>
            <p>198, Bombay Talkies Compd, Himanshurai Road, Malad (west)</p>
            <p>Mumbai, Maharashtra 400064</p>
            <p>India</p>
            <p>02228896140</p>
            <p>Tax Number : 560</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Shipped To :</h2>
            <p>Keire</p>
            <p>198, Bombay Talkies Compd, Himanshurai Road, Malad (west)</p>
            <p>Mumbai, Maharashtra 400064</p>
            <p>India</p>
            <p>02228896140</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">#PROP00001</h2>
            <p className="text-gray-500">Issue Date : Nov 9, 2022</p>
            <img src="https://via.placeholder.com/100" alt="QR Code" className="mt-2" />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Status :</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Open</span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Product Summary</h2>
          <p className="text-gray-500 mb-4">All items here cannot be deleted.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">#</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Product</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Quantity</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Rate</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Discount</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Tax</th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Description</th>
                  <th className="py-2 px-4 border-b text-left text-red-600 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">Bicycle parts</td>
                  <td className="py-2 px-4 border-b">1 (Inch)</td>
                  <td className="py-2 px-4 border-b">$150.00</td>
                  <td className="py-2 px-4 border-b">$0.00</td>
                  <td className="py-2 px-4 border-b">
                    <div>CGST (10%) $15.00</div>
                    <div>SGST (5.5%) $8.25</div>
                  </td>
                  <td className="py-2 px-4 border-b">-</td>
                  <td className="py-2 px-4 border-b">$150.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="py-2 px-4 text-right font-semibold">Total</td>
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">$150.00</td>
                  <td className="py-2 px-4">$0.00</td>
                  <td className="py-2 px-4">$23.25</td>
                  <td className="py-2 px-4">&nbsp;</td>
                  <td className="py-2 px-4">$173.25</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-primary"
          >
            Back
          </button>
        </div>
      </TitleCard>
    </div>
  );
};

export default ProposalDetail;
