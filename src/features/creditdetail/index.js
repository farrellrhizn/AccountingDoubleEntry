import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleCard from '../../components/Cards/TitleCard';

const CreditDetail = () => {
  const navigate = useNavigate();

  return (
    
    <div className="container mx-auto px-4 py-8">
      <TitleCard topMargin="mt-2" title="Credit Details">
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
            <h2 className="text-xl font-bold">#INVO00001</h2>
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

export default CreditDetail;
