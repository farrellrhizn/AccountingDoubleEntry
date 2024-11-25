import React from "react";
import TitleCard from "../../../components/Cards/TitleCard";

function InvoiceStats() {
  return (
    <TitleCard title="Invoice Stats">
      <div className="flex lg:flex-row flex-col gap-1 w-full lg:w-auto">
        <button className="btn btn-primary w-full lg:w-auto">Invoices Weekly Statistics</button>
        <button className="btn btn-primary w-full lg:w-auto">Invoices Monthly Statistics</button>
      </div>
      <table className="table w-full mt-6">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold">Status</th>
            <th className="px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Invoice Generated</td>
            <td className="px-4 py-2">$3,638.25</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Paid</td>
            <td className="px-4 py-2">$935.55</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Due</td>
            <td className="px-4 py-2">$2,702.70</td>
          </tr>
        </tbody>
      </table>
    </TitleCard>
  );
}

export default InvoiceStats;