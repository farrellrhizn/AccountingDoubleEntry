const moment = require("moment");

const CALENDAR_INITIAL_EVENTS = [
    { title: "Product call", theme: "GREEN", startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
    { title: "Meeting with tech team", theme: "PINK", startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
    { title: "Meeting with Cristina", theme: "PURPLE", startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
    { title: "Meeting with Alex", theme: "BLUE", startTime: moment().startOf('day'), endTime: moment().endOf('day') }, 
    { title: "Product Call", theme: "GREEN", startTime: moment().startOf('day'), endTime: moment().endOf('day') },
    { title: "Client Meeting", theme: "PURPLE", startTime: moment().startOf('day'), endTime: moment().endOf('day') },
    { title: "Client Meeting", theme: "ORANGE", startTime: moment().add(3, 'd').startOf('day'), endTime: moment().add(3, 'd').endOf('day') },
    { title: "Product meeting", theme: "PINK", startTime: moment().add(5, 'd').startOf('day'), endTime: moment().add(5, 'd').endOf('day') },
    { title: "Sales Meeting", theme: "GREEN", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
    { title: "Product Meeting", theme: "ORANGE", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
    { title: "Marketing Meeting", theme: "PINK", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
    { title: "Client Meeting", theme: "GREEN", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
    { title: "Sales meeting", theme: "BLUE", startTime: moment().add(12, 'd').startOf('day'), endTime: moment().add(12, 'd').endOf('day') },
    { title: "Client meeting", theme: "PURPLE", startTime: moment().add(16, 'd').startOf('day'), endTime: moment().add(16, 'd').endOf('day') },
];

const RECENT_TRANSACTIONS = [
    { id: 1, name: "Cash", type: "Asset", parentAccountName: "Current Assets", balance: 1000, status: "Active", date: moment().endOf('day') },
    { id: 2, name: "Accounts Receivable", type: "Asset", parentAccountName: "Current Assets", balance: 1500, status: "Active", date: moment().add(-1, 'd').endOf('day') },
    { id: 3, name: "Inventory", type: "Asset", parentAccountName: "Current Assets", balance: 2000, status: "Inactive", date: moment().add(-2, 'd').endOf('day') },
    { id: 4, name: "Accounts Payable", type: "Liability", parentAccountName: "Current Liabilities", balance: 500, status: "Active", date: moment().add(-3, 'd').endOf('day') },
    { id: 5, name: "Sales Revenue", type: "Income", parentAccountName: "Revenue", balance: 3000, status: "Active", date: moment().add(-4, 'd').endOf('day') },
    { id: 6, name: "Service Revenue", type: "Income", parentAccountName: "Revenue", balance: 2500, status: "Inactive", date: moment().add(-5, 'd').endOf('day') },
    { id: 7, name: "Retained Earnings", type: "Equity", parentAccountName: "Equity", balance: 10000, status: "Active", date: moment().add(-6, 'd').endOf('day') },
    { id: 8, name: "Salaries Expense", type: "Expense", parentAccountName: "Operating Expenses", balance: 1200, status: "Active", date: moment().add(-7, 'd').endOf('day') },
    { id: 9, name: "Rent Expense", type: "Expense", parentAccountName: "Operating Expenses", balance: 800, status: "Inactive", date: moment().add(-8, 'd').endOf('day') },
    { id: 10, name: "Utilities Expense", type: "Expense", parentAccountName: "Operating Expenses", balance: 600, status: "Active", date: moment().add(-9, 'd').endOf('day') }
];

const DUMMY_LEDGER_DATA = [
    {
        id: 1,
        accountName: "Cash",
        name: "John Doe",
        transactionType: "Deposit",
        transactionDate: "2024-01-01",
        debit: 1000,
        credit: 0,
        balance: 1000,
    },
    {
        id: 2,
        accountName: "Cash",
        name: "Jane Doe",
        transactionType: "Withdrawal",
        transactionDate: "2024-01-02",
        debit: 0,
        credit: 500,
        balance: 500,
    },
];

const TRIAL_BALANCE_DATA = [
    { account: 'Petty Cash', code: '1065', debit: '$20.00', credit: '$110.00' },
    { account: 'Inventory', code: '1510', debit: '$50.00', credit: '$0.00' },
    { account: 'Accum.depreciation-Motor Vehicle', code: '1845', debit: '$0.00', credit: '$0.00' },
    { account: 'Sales Income', code: '4010', debit: '$0.00', credit: '$110.00' },
    { account: 'Cost of Sales- On Services', code: '5005', debit: '$220.25', credit: '$0.00' },
    { account: 'Rent Paid', code: '5760', debit: '$200.00', credit: '$0.00' },
];

const dummyProductData = [
    {
      name: "Bicycle parts",
      code: "BC001CLE",
      salesPrice: "$150.00",
      purchasePrice: "$100.00",
      tax: "CGST, SGST",
      incomeAccount: "Business profits",
      unit: "Inch",
      openingStock: "19",
      type: "Product",
      createdAt: moment().subtract(5, 'days').endOf('day'),
      updatedAt: moment().subtract(3, 'days').endOf('day'),
    },
    {
      name: "Car engine",
      code: "CE002AB",
      salesPrice: "$5000.00",
      purchasePrice: "$3500.00",
      tax: "CGST, SGST",
      incomeAccount: "Automobile profits",
      unit: "Piece",
      openingStock: "5",
      type: "Product",
      createdAt: moment().subtract(10, 'days').endOf('day'),
      updatedAt: moment().subtract(2, 'days').endOf('day'),
    },
    // Tambahkan data dummy lainnya di sini
  ];

    // Dummy customer data
  const dummyCustomerData = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1234567890",
      address: "123 Main St, Cityville",
      companyName: "Smith Corp",
      createdAt: moment().subtract(15, 'days').endOf('day'),
      updatedAt: moment().subtract(2, 'days').endOf('day'),
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+0987654321",
      address: "456 Elm St, Townsville",
      companyName: "Doe Enterprises",
      createdAt: moment().subtract(20, 'days').endOf('day'),
      updatedAt: moment().subtract(5, 'days').endOf('day'),
    },
  ];

  // Create new customer
  const createCustomer = (customer) => {
    customer.createdAt = moment().endOf('day');
    customer.updatedAt = moment().endOf('day');
    dummyCustomerData.push(customer);
  };

  // Update customer
  const updateCustomer = (index, updatedCustomer) => {
    dummyCustomerData[index] = { ...dummyCustomerData[index], ...updatedCustomer, updatedAt: moment().endOf('day') };
  };
    
  
  const createProduct = (product) => {
    product.createdAt = moment().endOf('day');
    product.updatedAt = moment().endOf('day');
    return product;
  };
  
  const uploadProducts = (products) => {
    return products.map(product => ({
      ...product,
      createdAt: moment().endOf('day'),
      updatedAt: moment().endOf('day'),
    }));
  };

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS,
    RECENT_TRANSACTIONS,
    DUMMY_LEDGER_DATA,
    TRIAL_BALANCE_DATA,
    dummyProductData,
    dummyCustomerData,
    createCustomer,
    updateCustomer,
    createProduct,
    uploadProducts,
});
