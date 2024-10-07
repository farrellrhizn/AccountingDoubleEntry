import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleCard from '../../components/Cards/TitleCard';

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

export default VendorDetail;
