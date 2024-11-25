import React from 'react';

const CustomTable = () => {
  // Contoh data yang ditampilkan dalam tabel
  const tableData = [
    {
      invoice: 'INV-001',
      date: '2024-01-01',
      customer: 'John Doe',
      category: 'Service',
      status: 'Paid',
      paidAmount: '$500.00',
      amountDue: '$0.00',
      paymentDate: '2024-01-10',
      amount: '$500.00',
    },
    {
      invoice: 'INV-002',
      date: '2024-01-05',
      customer: 'Jane Smith',
      category: 'Product',
      status: 'Pending',
      paidAmount: '$300.00',
      amountDue: '$200.00',
      paymentDate: '2024-02-01',
      amount: '$500.00',
    },
    // Tambahkan data lainnya sesuai kebutuhan...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left">Bill</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Customer</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Paid Amount</th>
            <th className="py-3 px-6 text-left">Amount Due</th>
            <th className="py-3 px-6 text-left">Payment Date</th>
            <th className="py-3 px-6 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{item.invoice}</td>
              <td className="py-3 px-6">{item.date}</td>
              <td className="py-3 px-6">{item.customer}</td>
              <td className="py-3 px-6">{item.category}</td>
              <td className={`py-3 px-6 ${item.status === 'Paid' ? 'text-green-500' : 'text-yellow-500'}`}>
                {item.status}
              </td>
              <td className="py-3 px-6">{item.paidAmount}</td>
              <td className="py-3 px-6">{item.amountDue}</td>
              <td className="py-3 px-6">{item.paymentDate}</td>
              <td className="py-3 px-6">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
