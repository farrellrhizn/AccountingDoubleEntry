import React from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { useNavigate } from "react-router-dom";

const DetailJournal = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <TitleCard topMargin="mt-2" title="Journal">
        {/* Journal Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">To :</h2>
            <p>Globex Corporation</p>
            <p>198, Bombay Talkies Compd, Himanshurai Road, Malad (west)</p>
            <p>Mumbai Maharashtra</p>
            <p>India</p>
            <p>02228896140</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">#JUR00001</h2>
            <p className="text-gray-500">Journal No: #JUR00001</p>
            <p className="text-gray-500">Journal Ref: Self</p>
            <p className="text-gray-500">Journal Date: Jan 21, 2021</p>
          </div>
        </div>

        {/* Journal Account Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Journal Account Summary</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    #
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Account
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Description
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Debit
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Credit
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Amount
                  </th>
                  <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">
                    1060 - Checking Account
                  </td>
                  <td className="py-2 px-4 border-b">Reference site about,</td>
                  <td className="py-2 px-4 border-b">$200.00</td>
                  <td className="py-2 px-4 border-b">$0.00</td>
                  <td className="py-2 px-4 border-b">$200.00</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a2 2 0 012 2v2H8V5a2 2 0 012-2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">
                    1200 - Account Receivables
                  </td>
                  <td className="py-2 px-4 border-b">Reference site about,</td>
                  <td className="py-2 px-4 border-b">$0.00</td>
                  <td className="py-2 px-4 border-b">$200.00</td>
                  <td className="py-2 px-4 border-b">$200.00</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a2 2 0 012 2v2H8V5a2 2 0 012-2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="4"
                    className="py-2 px-4 text-right font-semibold"
                  >
                    Total Debit
                  </td>
                  <td colSpan="2" className="py-2 px-4 text-right">
                    $200.00
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td
                    colSpan="4"
                    className="py-2 px-4 text-right font-semibold"
                  >
                    Total Credit
                  </td>
                  <td colSpan="2" className="py-2 px-4 text-right">
                    $200.00
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Description :</h2>
          <p className="text-gray-500">
            What this means is that for every recorded transaction, two accounts
            are affected - and as a result, there is always a debit entry and a
            credit entry.
          </p>
        </div>
        <div className="mt-6">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Back
          </button>
        </div>
      </TitleCard>
    </div>
  );
};

export default DetailJournal;
