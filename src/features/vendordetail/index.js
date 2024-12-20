import React from "react";
import { useNavigate } from "react-router-dom";
import TitleCard from "../../components/Cards/TitleCard";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const VendorDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <TitleCard topMargin="mt-2" title="Vendor Detail">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vendor Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Vendor Info</h2>
            <p>Anthony B Renfroe</p>
            <p>anthony@dayrep.com</p>
            <p>8974562145</p>
            <p>560</p>
          </div>

          {/* Billing Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Billing Info</h2>
            <p>Anthony B Renfroe</p>
            <p>4351 Maple Court</p>
            <p>Jefferson City, Missouri, 65109</p>
            <p>United States</p>
            <p>15733533404</p>
          </div>

          {/* Shipping Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Shipping Info</h2>
            <p>Anthony B Renfroe</p>
            <p>4351 Maple Court</p>
            <p>Jefferson City, Missouri, 65109</p>
            <p>United States</p>
            <p>15733533404</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Company Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">Vendor Id</p>
              <p>#VEND00001</p>
            </div>
            <div>
              <p className="font-semibold">Date of Creation</p>
              <p>Jul 8, 2020</p>
            </div>
            <div>
              <p className="font-semibold">Balance</p>
              <p className="text-red-600">$-113,353.00</p>
            </div>
            <div>
              <p className="font-semibold">Total Sum of Bills</p>
              <p>$0.00</p>
            </div>
            <div>
              <p className="font-semibold">Quantity of Bills</p>
              <p>2</p>
            </div>
            <div>
              <p className="font-semibold">Average Sales</p>
              <p>$0.00</p>
            </div>
            <div>
              <p className="font-semibold">Overdue</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>

        <TitleCard topMargin="mt-2" title="Bills">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-6 border-b text-left">Bill</th>
                <th className="py-2 px-6 border-b text-left">Bill Date</th>
                <th className="py-2 px-6 border-b text-left">Due Date</th>
                <th className="py-2 px-6 border-b text-left">Amount Due</th>
                <th className="py-2 px-6 border-b text-left">Status</th>
                <th className="py-2 px-6 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-6 border-b">
                  <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                    #BILL00013
                  </button>
                </td>
                <td className="py-2 px-6 border-b">May 19, 2023</td>
                <td className="py-2 px-6 border-b">May 21, 2023</td>
                <td className="py-2 px-6 border-b">$0.00</td>
                <td className="py-2 px-6 border-b">
                  <span className="flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 bg-yellow-500">
                    Sent
                  </span>
                </td>
                <td className="py-2 px-6 border-b">
                  <div className="flex space-x-2">
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-6 border-b">
                  <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                    #BILL00004
                  </button>
                </td>
                <td className="py-2 px-6 border-b">Feb 18, 2022</td>
                <td className="py-2 px-6 border-b">Feb 18, 2022</td>
                <td className="py-2 px-6 border-b">$-100,000.00</td>
                <td className="py-2 px-6 border-b">
                  <span className="flex items-center justify-center px-3 py-1 text-xs font-semibold text-white rounded-full w-24 h-6 bg-green-600">
                    Paid
                  </span>
                </td>
                <td className="py-2 px-6 border-b">
                  <div className="flex space-x-2">
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="btn bg-transparent border-primary hover:bg-primary hover:text-white group p-2">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </TitleCard>

        {/* Back Button */}
        <div className="mt-6">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Back
          </button>
        </div>
      </TitleCard>
    </div>
  );
};

export default VendorDetail;
