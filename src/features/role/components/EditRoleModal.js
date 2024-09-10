import React from "react";

const EditRoleModal = ({ onClose }) => {
  const ShowSendDupCon = () => {
    return (
      <>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Show
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Send
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Duplicate
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Convert To Invoice
        </div>
      </>
    );
  };

  const ManageCreateEditDelete = () => {
    return (
      <>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Manage
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Create
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Edit
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Delete
        </div>
      </>
    );
  };

  const ShowSendCreatePayDeletePay = () => {
    return (
      <>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Show
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Send
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Create Payment
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Delete Payment
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Duplicate
        </div>
      </>
    );
  };

  const TDReport = () => {
    return (    
        <>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Income
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Expense
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Income VS Expense
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Tax
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Loss & Profit
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Invoice
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Bill
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Balance Sheet
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Ledger
        </div>
        <div className="flex items-center">
          <input type="checkbox" defaultChecked className="mr-2" />
          Trial Balance
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-[850px] max-h-[80vh] overflow-auto shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Role</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={"Accountant"}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Assign Permission to Roles
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">MODULE</th>
                  <th className="w-3/4 px-4 py-2">PERMISSIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dashboard</td>
                  <td>
                    <div className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      Show
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>User</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Role</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Proposal</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <ShowSendDupCon />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Retainer</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <ShowSendDupCon />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Invoice</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <ShowSendCreatePayDeletePay />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Bill</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <ShowSendCreatePayDeletePay />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Revenue</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Payment</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Proposal Product</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Delete
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Invoice Product</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Delete
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Bill Product</td>
                  <td>
                        <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Delete
                        </div>
                  </td>
                </tr>

                <tr>
                  <td>Goal</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Credit Note</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Debit Note</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Bank Account</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Transfer</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Transaction</td>
                  <td>
                        <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Manage
                        </div>
                  </td>
                </tr>

                <tr>
                  <td>Product & Service</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Customer</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Vendor</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Show
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Plan</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultUnchecked
                            className="mr-2"
                          />
                          Manage
                        </div>
                      <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultUnchecked
                            className="mr-2"
                          />
                          Buy
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Contract</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete/>
                      <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Show
                        </div>
                      <div className="align-items-left">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                          Duplicate
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Constant Tax</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Constant Unit</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Constant Custom Field</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Constant Contract Type</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Company Settings</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <input
                          type="checkbox"
                          defaultUnchecked
                          className="mr-2"
                        />
                        Manage
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Assets</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Chart of Account</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Journal Entry</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <ManageCreateEditDelete />
                      <div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="mr-2"
                        />
                        Show
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Chart of Account</td>
                  <td>
                    <div className="grid grid-cols-4 gap-4">
                      <TDReport />
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-4">
          <button
            onClick={onClose}
            className="btn bg-secondary text-white hover:bg-grey px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="btn bg-primary text-white hover:bg-grey px-4 py-2 rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;
