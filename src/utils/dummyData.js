const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", location : "Paris", amount : 100, date : moment().endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "Peru", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", location : "London", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", location : "Paris", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-2, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "jhon@dashwind.com", location : "Paris", amount : 91, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 161, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "US", amount : 121, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "jhon@dashwind.com", location : "Tokyo", amount : 713, date : moment().add(-3, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 217, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 117, date : moment().add(-3, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 612, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 631, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 617, date : moment().add(-3, 'd').endOf('day')},

    ],

    JOURNAL_ACCOUNTS : [
        {journalId: "#JUR00001", date: moment("2021-01-21"), amount: 200.00, description: "What this means is that for every recorded transaction"},
        {journalId: "#JUR00002", date: moment("2021-01-20"), amount: 150.00, description: "What this means is that for every recorded transaction"},
        {journalId: "#JUR00003", date: moment("2021-01-21"), amount: 500.00, description: "What this means is that for every recorded transaction"},
        {journalId: "#JUR00004", date: moment("2021-01-19"), amount: 250.00, description: "What this means is that for every recorded transaction"},
        {journalId: "#JUR00005", date: moment("2021-01-22"), amount: 100.00, description: "What this means is that for every recorded transaction"},
    ],

    BALANCE_SHEET : [
        {account: "Assets", accountCode: null, total: null, 
            children: [
                {account: "Current Asset", accountCode: null, total: null, 
                    children: [
                        {account: "Petty Cash", accountCode: 1065, total: 90.00}]},
                {account: "Total Current Asset", accountCode: null, total: 90.00 },
                {account: "Inventory Asset", accountCode: null, total: null, 
                    children: [
                        {account: "Inventory", accountCode: 1510, total: -50.00}]},
                {account: "Total Inventory Asset", accountCode: null, total: -50.00}]},
        {account: "Total for Assets", accountCode: null, total: 40.00
        }
    ],

    DASHBOARD_ACC_BALANCE : [
        {bank:'-', holdername:'Cash', balance: '$110,899.35'},
        {bank:'ROUNDBANK', holdername:'Benjamin Adams', balance: '$113,843.32'},
        {bank:'COBIZ BANK', holdername:'Chisom Latifat', balance: '$1,899.00'},
        {bank:'US BANK, NA', holdername:'Earl Hane MD', balance: '$100,000.00'},
        {bank:'Caldwell BANK', holdername:'Pearl Reed', balance: '$5,000.00'},
        {bank:'Charity BANK', holdername:'Deborah Hawkins', balance: '$1,899.00'},
        {bank:'US BANK, NA', holdername:'Earl Hane MD', balance: '$100,000.00'},
        {bank:'COBIZ BANK', holdername:'Chisom Latifat', balance: '$1,899.00'},
        {bank:'ROUNDBANK', holdername:'Benjamin Adams', balance: '$113,843.32'},
        {bank:'Charity BANK', holdername:'Deborah Hawkins', balance: '$1,899.00'},
        {bank:'-', holdername:'Cash', balance: '$110,899.35'},
        {bank:'Caldwell BANK', holdername:'Pearl Reed', balance: '$5,000.00'},
    ],
    
    PRODUCT_STOCK : [
        { name: "Bicycle parts", sku: "BC001CLE", quantity: 19 },
        { name: "Teagan Forbes", sku: "BC008ACC", quantity: 12 },
        { name: "Bicycle Clothing", sku: "BC008AC1", quantity: 48 },
        { name: "Car", sku: "SKU123", quantity: -20 },
        { name: "T-Shirt", sku: "BC008A74", quantity: 20 },
        { name: "Purse", sku: "001452", quantity: 49 },
        { name: "Shoes", sku: "00152", quantity: -30 },
        { name: "Oven", sku: "TRG520", quantity: 701 },
        { name: "Clock", sku: "00711", quantity: 400 },
        { name: "Women Bag", sku: "P100", quantity: 101 },
        { name: "Watch", sku: "P200", quantity: 250 },
    ],

    VENDOR_ACC : [
        { id: '#VEND00001', name: 'Anthony B Renfroe', contact: '8974562145', email: 'anthony@dayrep.com', balance: -113353.00, lastLoginAt: '2024-08-18 21:24:11' },
        { id: '#VEND00002', name: 'Kim J Gibson', contact: '9685741234', email: '5a6oxm34en8@powerencry.com', balance: 32258.85, lastLoginAt: null },
        { id: '#VEND00003', name: 'Adrienne J Reed', contact: '5896741253', email: 'qf3783cllb8@groupbuff.com', balance: 4213.87, lastLoginAt: null },
        { id: '#VEND00004', name: 'Eugene A Hughes', contact: '9856745896', email: 'hemki07gr4u@fakemailgenerator.net', balance: -2060.00, lastLoginAt: null },
        { id: '#VEND00005', name: 'Pearl W Poole', contact: '8574961234', email: 'z1sh8i3o1e9@classesmail.com', balance: 0.00, lastLoginAt: null },
        { id: '#VEND00006', name: 'Basia Mcclain', contact: '8562365894', email: 'basiamcclain@gmail.com', balance: -303.95, lastLoginAt: null },
        { id: '#VEND00007', name: 'Vendor', contact: '9568741234', email: 'vendor@example.com', balance: 0.00, lastLoginAt: null },
        { id: '#VEND00008', name: 'Brody Anderson', contact: '9856741234', email: 'hazenyqy@mailinator.com', balance: 10000.25, lastLoginAt: null },
        { id: '#VEND00009', name: 'Abra Potter', contact: '7485968469', email: 'citowurah@mailinator.com', balance: 5000.52, lastLoginAt: null },
        { id: '#VEND00010', name: 'Sybill Anthony', contact: '7485123964', email: 'salobam@mailinator.com', balance: 6548.41, lastLoginAt: null }
    ],

    CONTRACT_DATA : [
        { id: '#CON00001', subject: 'Quos Dolor', customer: 'Keire', type: 'Planning', value: '$32.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11', status: 'Pending' },
        { id: '#CON00002', subject: 'Non Voluptas', customer: 'Keire', type: 'Markering', value: '$35.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11', status: 'Pending' },
        { id: '#CON00003', subject: 'Nihil Sint', customer: 'Keire', type: 'Planning', value: '$80.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11',status: 'Active' },
        { id: '#CON00004', subject: 'Iste aspernatur tota', customer: 'Protiong', type: 'Marketing', value: '$10.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11', status: 'Inactive' },
        { id: '#CON00005', subject: 'Quos Dolor', customer: 'Keire', type: 'Planning', value: '$72.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11',status: 'Pending' },
        { id: '#CON00006', subject: 'Nihaswer', customer: 'Alham', type: 'Marketing', value: '$30.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11',status:'Active' },
        { id: '#CON00007', subject: 'Dallas', customer: 'Dwane', type: 'Sales', value: '$8.00', startDate: '2024-08-18 21:24:11', endDate: '2024-08-18 21:24:11',status:'Inactive' },
    ],

    ASSETS_DATA : [
        { name: 'Isabelle Dillion', purchaseDate: 'Quos Dolor', supportedDate: 'Aug 12, 2020', amount: '$1,000.00', description: '$32.00'},
        { name: 'Alladin Smith', purchaseDate: 'Non Voluptas', supportedDate: 'Jul 31, 2020', amount: '$5,000.00', description: '$35.00'},
        { name: 'Carissa Nichols', purchaseDate: 'Nihil Sint', supportedDate: 'Jul 27 2020', amount: '$6,000.00', description: '$80.00'},
    ],

    ORDER_DATA : [
        { 
          order_id: "666833CCD8232289317101", date: "11 Jun 2024", name: "Rajodiya Infotech", plan_name: "Platinum", 
          price: "USD500000", payment_type: "Authorizenet", status: "Success", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "6666BFF42838F402940847", date: "10 Jun 2024", name: "Rajodiya Infotech", plan_name: "Gold", 
          price: "USD4000", payment_type: "Authorizenet", status: "Success", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "1717744638", date: "07 Jun 2024", name: "Rajodiya Infotech", plan_name: "Platinum", 
          price: "USD5000", payment_type: "Tap", status: "Success", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "648A8211542D9523313083", date: "15 Jun 2023", name: "Rajodiya Infotech", plan_name: "Business Builder Plan", 
          price: "USD5000", payment_type: "STRIPE", status: "Succeeded", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "647880931CCFF748280917", date: "01 Jun 2023", name: "Rajodiya Infotech", plan_name: "Platinum", 
          price: "USD5000", payment_type: "Bank Transfer", status: "Pending", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "647B7D279D43C045491390", date: "01 Jun 2023", name: "Rajodiya Infotech", plan_name: "Silver", 
          price: "USD200", payment_type: "Bank Transfer", status: "Pending", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "1657519306", date: "11 Jul 2022", name: "Rajodiya Infotech", plan_name: "Platinum", 
          price: "USD5000", payment_type: "paytm", status: "Success", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "62CBBA3ACF45098031886", date: "11 Jul 2022", name: "Rajodiya Infotech", plan_name: "Gold", 
          price: "USD4000", payment_type: "PAYPAL", status: "Approved", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "1657280573", date: "08 Jul 2022", name: "Rajodiya Infotech", plan_name: "Platinum", 
          price: "USD5000", payment_type: "Coingate", status: "Success", coupon: "-", invoice: "-" 
        },
        { 
          order_id: "1657280538", date: "08 Jul 2022", name: "Rajodiya Infotech", plan_name: "Gold", 
          price: "USD4000", payment_type: "paytm", status: "Success", coupon: "-", invoice: "-" 
        }
      ],   

      STAFFUSER_DATA : [
        { name: "John", role: "Accountant", email: "john@example.com", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" }, 
        { name: "Keanu", role: "Accountant", email: "keanu2006@gmail.com", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Stefanie", role: "Accountant", email: "stefanie1989@gmail.com", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Fuller Prince", role: "Accountant", email: "kujumi@mailinator.com", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Dennis Leonard", role: "Accountant", email: "jatebiqjxy@mailinator.com", image: "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=600" }
      ],

      STAFFUSERDATA_LOGS : [
        { name: "John", role: "User", email: "john@example.com", lastLogin: "2023-04-25 14:13:45", country: "India", deviceType: "desktop", os: "Linux", ip: "00.00.00.000", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "John", role: "User", email: "john.doe2@example.com", lastLogin: "2023-04-25 14:15:35", country: "India", deviceType: "desktop", os: "Linux", ip: "00.00.00.000", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Keire", role: "Customer", email: "keire@example.com", lastLogin: "2023-04-25 16:06:27", country: "India", deviceType: "desktop", os: "Linux", ip: "00.00.00.000", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Anthony B Renfroe", role: "Vendor", email: "anthony@example.com", lastLogin: "2023-04-25 16:06:43", country: "India", deviceType: "desktop", os: "Linux", ip: "00.00.00.000", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Anthony B Renfroe", role: "Vendor", email: "anthony.renfroe@example.com", lastLogin: "2023-04-26 12:51:50", country: "India", deviceType: "desktop", os: "Linux", ip: "00.00.00.000", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Keire", role: "Customer", email: "keire.second@example.com", lastLogin: "2024-11-17 21:44:34", country: "Romania", deviceType: "desktop", os: "Windows", ip: "185.252.220.149", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Anthony B Renfroe", role: "Vendor", email: "anthony.b.renfroe@example.com", lastLogin: "2024-11-17 21:44:49", country: "Romania", deviceType: "desktop", os: "Windows", ip: "185.252.220.149", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    
    
      PROPOSAL_DATA : [
        { proposal: "#PROP00001", customer: "Keire", category: "Insurance", issueDate: "Nov 9, 2022", status: "Draft" },
        { proposal: "#PROP00002", customer: "Protiong", category: "Inventory", issueDate: "Nov 12, 2022", status: "Open" },
        { proposal: "#PROP00003", customer: "Ida F. Mullen", category: "Inventory", issueDate: "Nov 19, 2022", status: "Accepted" },
        { proposal: "#PROP00004", customer: "Teresa R McRae", category: "Inventory", issueDate: "Nov 19, 2022", status: "Declined" },
        { proposal: "#PROP00005", customer: "Joel O Dolan", category: "Insurance", issueDate: "Nov 30, 2022", status: "Close" },
        { proposal: "#PROP00006", customer: "Jasper Gardner", category: "Inventory", issueDate: "Nov 23, 2022", status: "Open" },
        { proposal: "#PROP00007", customer: "Keire", category: "Insurance", issueDate: "Jun 15, 2012", status: "Draft" },
        { proposal: "#PROP00008", customer: "Keire", category: "Inventory", issueDate: "Jan 8, 2023", status: "Accepted" },
        { proposal: "#PROP00009", customer: "Keire", category: "Insurance", issueDate: "Nov 10, 2008", status: "Open" },
        { proposal: "#PROP00010", customer: "Joel O Dolan", category: "Inventory", issueDate: "May 19, 2023", status: "Draft" },
        { proposal: "#PROP00011", customer: "Cynthia Yates", category: "Insurance", issueDate: "Feb 2, 2023", status: "Draft" },
        { proposal: "#PROP00012", customer: "Peter W Lang", category: "Inventory", issueDate: "Mar 5, 2023", status: "Open" },
        { proposal: "#PROP00013", customer: "Miranda White", category: "Insurance", issueDate: "Apr 15, 2023", status: "Accepted" },
        { proposal: "#PROP00014", customer: "Samuel Y. Pyle", category: "Inventory", issueDate: "May 1, 2023", status: "Declined" },
        { proposal: "#PROP00015", customer: "Dwayne F. Brock", category: "Insurance", issueDate: "Jun 9, 2023", status: "Close" },
        { proposal: "#PROP00016", customer: "Rachel D. Walters", category: "Inventory", issueDate: "Jul 11, 2023", status: "Open" },
        { proposal: "#PROP00017", customer: "William F. Byrd", category: "Insurance", issueDate: "Aug 3, 2023", status: "Draft" },
        { proposal: "#PROP00018", customer: "Gail L. Davis", category: "Inventory", issueDate: "Sep 14, 2023", status: "Accepted" },
        { proposal: "#PROP00019", customer: "Victoria T. Boyd", category: "Insurance", issueDate: "Oct 20, 2023", status: "Open" },
        { proposal: "#PROP00020", customer: "Eugene D. Miller", category: "Inventory", issueDate: "Nov 1, 2023", status: "Draft" }
      ],

      BANKACC_DATA : [
        { chartOfAccount: "-", name: "Cash", bank: "-", accountNumber: "-", currentBalance: "$111,201.65", contactNumber: "-", bankBranch: "-" },
        { chartOfAccount: "-", name: "Benjamin Adams", bank: "ROUND BANK", accountNumber: "GB97WDXE63527216276670", currentBalance: "$113,743.32", contactNumber: "8574961256", bankBranch: "Studio 90Murray LandLake NathanPE29 2HJ" },
        { chartOfAccount: "Petty Cash", name: "Chisom Latifat", bank: "COBIZ BANK", accountNumber: "7008275225419", currentBalance: "$1,022.00", contactNumber: "7878787878", bankBranch: "19 Ebubechukwu Street 95 365 OluwunmiVille" },
        { chartOfAccount: "-", name: "Earl Hane MD", bank: "US BANK, NA", accountNumber: "7763867719404", currentBalance: "$100,000.00", contactNumber: "7878787878", bankBranch: "517 Turner Lights Denver, CO 80221" },
        { chartOfAccount: "Petty Cash", name: "Deborah Hawkins", bank: "Charity BANK", accountNumber: "5035621420", currentBalance: "$1,000.00", contactNumber: "8532589645", bankBranch: "517 Turner Lights Denver, CO 80221" },
        { chartOfAccount: "-", name: "Pearl Reed", bank: "Caldwell BANK", accountNumber: "9807418700", currentBalance: "$5,000.00", contactNumber: "8532589645", bankBranch: "517 Turner Studio Murray Lights Denver, CO 80221" },
        { chartOfAccount: "-", name: "Jasmine Collins", bank: "ZION BANK", accountNumber: "653782214340", currentBalance: "$20,500.00", contactNumber: "8543219876", bankBranch: "435 Jefferson Lane, Dallas, TX 75209" },
        { chartOfAccount: "Savings", name: "Michael Smith", bank: "WELLS FARGO", accountNumber: "849230587123", currentBalance: "$8,200.00", contactNumber: "7896541230", bankBranch: "1200 E Broadway, Seattle, WA 98122" },
        { chartOfAccount: "-", name: "Sara Johnson", bank: "CHASE BANK", accountNumber: "234598123456", currentBalance: "$35,000.00", contactNumber: "8765432109", bankBranch: "800 Pine St, San Francisco, CA 94108" },
        { chartOfAccount: "-", name: "Robert Brown", bank: "BANK OF AMERICA", accountNumber: "984320167854", currentBalance: "$75,600.00", contactNumber: "9123456789", bankBranch: "101 N Tryon St, Charlotte, NC 28255" },
        { chartOfAccount: "Loan", name: "Linda White", bank: "CITIBANK", accountNumber: "482195367834", currentBalance: "$50,000.00", contactNumber: "8321459786", bankBranch: "One Court Square, Long Island City, NY 11120" },
        { chartOfAccount: "-", name: "James Clark", bank: "TD BANK", accountNumber: "784512309876", currentBalance: "$90,100.00", contactNumber: "7412589630", bankBranch: "1701 John F Kennedy Blvd, Philadelphia, PA 19103" },
        { chartOfAccount: "-", name: "Emily Davis", bank: "HSBC", accountNumber: "123409876543", currentBalance: "$40,250.00", contactNumber: "9876543210", bankBranch: "452 5th Ave, New York, NY 10018" },
        { chartOfAccount: "Investment", name: "Daniel Lee", bank: "GOLDMAN SACHS", accountNumber: "786543210987", currentBalance: "$150,000.00", contactNumber: "6543219870", bankBranch: "200 West St, New York, NY 10282" },
        { chartOfAccount: "-", name: "Jessica Turner", bank: "MORGAN STANLEY", accountNumber: "349876512034", currentBalance: "$85,000.00", contactNumber: "7032154879", bankBranch: "1585 Broadway, New York, NY 10036" },
        { chartOfAccount: "-", name: "Thomas Green", bank: "BARCLAYS", accountNumber: "534210987654", currentBalance: "$65,400.00", contactNumber: "6587412369", bankBranch: "1 Churchill Place, London E14 5HP, UK" },
        { chartOfAccount: "-", name: "Patricia Lewis", bank: "LLOYDS BANK", accountNumber: "120948756123", currentBalance: "$23,100.00", contactNumber: "8745632109", bankBranch: "25 Gresham Street, London EC2V 7HN, UK" },
        { chartOfAccount: "-", name: "David Walker", bank: "DEUTSCHE BANK", accountNumber: "763452189034", currentBalance: "$98,000.00", contactNumber: "8451236987", bankBranch: "Taunusanlage 12, 60325 Frankfurt, Germany" },
        { chartOfAccount: "-", name: "Karen Hall", bank: "UBS", accountNumber: "908765432109", currentBalance: "$115,500.00", contactNumber: "7893216540", bankBranch: "Bahnhofstrasse 45, 8001 Zürich, Switzerland" },
        { chartOfAccount: "-", name: "Richard Young", bank: "CREDIT SUISSE", accountNumber: "456321098754", currentBalance: "$78,900.00", contactNumber: "7412365890", bankBranch: "Paradeplatz 8, 8001 Zürich, Switzerland" },
        { chartOfAccount: "-", name: "Laura King", bank: "BNP PARIBAS", accountNumber: "652478930125", currentBalance: "$67,000.00", contactNumber: "8926541309", bankBranch: "16 Boulevard des Italiens, 75009 Paris, France" },
        { chartOfAccount: "-", name: "Steven Allen", bank: "SOCIETE GENERALE", accountNumber: "321089456732", currentBalance: "$89,300.00", contactNumber: "7485213698", bankBranch: "29 Boulevard Haussmann, 75009 Paris, France" }
    ],

    INVOICE_DATA : [
      { invoice: '#INVO00001', customer: 'Aurora Oneil', issueDate: 'Feb 18, 2019', dueDate: 'Sep 6, 1988', amountDue: '$9,700.00', status: 'Partially Paid' },
      { invoice: '#INVO00002', customer: 'Keire', issueDate: 'Apr 22, 2022', dueDate: 'Nov 21, 2009', amountDue: '$0.00', status: 'Paid' },
      { invoice: '#INVO00003', customer: 'Karleigh Mitchell', issueDate: 'Jan 8, 1986', dueDate: 'Oct 8, 2005', amountDue: '$101.62', status: 'Paid' },
      { invoice: '#INVO00004', customer: 'Ida F. Mullen', issueDate: 'Nov 15, 1983', dueDate: 'Jun 23, 2017', amountDue: '-$493.94', status: 'Paid' },
      { invoice: '#INVO00005', customer: 'Ida F. Mullen', issueDate: 'Nov 9, 2022', dueDate: 'Nov 9, 2022', amountDue: '$0.00', status: 'Paid' },
      { invoice: '#INVO00006', customer: 'Teresa R McRae', issueDate: 'Nov 9, 2022', dueDate: 'Nov 9, 2022', amountDue: '-$0.10', status: 'Paid' },
      { invoice: '#INVO00011', customer: 'Teresa R McRae', issueDate: 'Nov 19, 1986', dueDate: 'Jan 27, 1993', amountDue: '-$40,020.75', status: 'Paid' },
      { invoice: '#INVO00012', customer: 'Barclay Dean', issueDate: 'Sep 9, 1970', dueDate: 'Mar 30, 2014', amountDue: '$404.25', status: 'Sent' },
      { invoice: '#INVO00013', customer: 'Barclay Dean', issueDate: 'Apr 21, 1976', dueDate: 'Sep 20, 1995', amountDue: '$105.50', status: 'Sent' },
      { invoice: '#INVO00014', customer: 'Matthew Evans', issueDate: 'Mar 5, 2020', dueDate: 'Apr 7, 2020', amountDue: '$1,500.00', status: 'Paid' },
      { invoice: '#INVO00015', customer: 'Linda Olson', issueDate: 'Jul 14, 2018', dueDate: 'Aug 14, 2018', amountDue: '$2,200.00', status: 'Paid' },
      { invoice: '#INVO00016', customer: 'John Doe', issueDate: 'Jun 22, 2021', dueDate: 'Jul 22, 2021', amountDue: '$3,800.00', status: 'Sent' },
      { invoice: '#INVO00017', customer: 'Jane Smith', issueDate: 'Sep 12, 2019', dueDate: 'Oct 12, 2019', amountDue: '$950.00', status: 'Partially Paid' },
      { invoice: '#INVO00018', customer: 'Chris Brown', issueDate: 'Nov 10, 2020', dueDate: 'Dec 10, 2020', amountDue: '$400.00', status: 'Paid' },
      { invoice: '#INVO00019', customer: 'Emily Clark', issueDate: 'Jan 5, 2023', dueDate: 'Feb 5, 2023', amountDue: '$0.00', status: 'Paid' },
      { invoice: '#INVO00020', customer: 'Michael Scott', issueDate: 'May 30, 2017', dueDate: 'Jun 30, 2017', amountDue: '$250.00', status: 'Paid' },
      { invoice: '#INVO00021', customer: 'Dwight Schrute', issueDate: 'Feb 14, 2020', dueDate: 'Mar 14, 2020', amountDue: '$75.00', status: 'Sent' },
      { invoice: '#INVO00022', customer: 'Pam Beesly', issueDate: 'Aug 18, 2021', dueDate: 'Sep 18, 2021', amountDue: '$600.00', status: 'Paid' },
      { invoice: '#INVO00023', customer: 'Jim Halpert', issueDate: 'Oct 20, 2022', dueDate: 'Nov 20, 2022', amountDue: '$2,000.00', status: 'Sent' }
    ],

    CREDIT_DATA : [
      { invoice: '#INVO00001', customer: 'Aurora Oneil', date: 'Feb 18, 2019', amount: '$9,700.00', description: 'It is a document that is issued by the seller to indicate a full or partial return of funds.' },
      { invoice: '#INVO00002', customer: 'Liam Johnson', date: 'Mar 10, 2019', amount: '$12,500.00', description: 'Payment for services rendered in the previous month.' },
      { invoice: '#INVO00003', customer: 'Emma Brown', date: 'Apr 15, 2019', amount: '$7,800.00', description: 'Refund for returned merchandise.' },
      { invoice: '#INVO00004', customer: 'Noah Davis', date: 'May 20, 2019', amount: '$15,300.00', description: 'Credit for overpayment on previous invoice.' },
      { invoice: '#INVO00005', customer: 'Olivia Wilson', date: 'Jun 22, 2019', amount: '$10,200.00', description: 'Compensation for service delay.' },
      { invoice: '#INVO00006', customer: 'Sophia Martinez', date: 'Jul 05, 2019', amount: '$11,000.00', description: 'Adjustment for pricing error.' },
      { invoice: '#INVO00007', customer: 'James Garcia', date: 'Aug 18, 2019', amount: '$8,600.00', description: 'Partial refund for subscription cancellation.' },
      { invoice: '#INVO00008', customer: 'Mia Rodriguez', date: 'Sep 12, 2019', amount: '$14,400.00', description: 'Settlement for damages incurred.' },
      { invoice: '#INVO00009', customer: 'Benjamin Lee', date: 'Oct 01, 2019', amount: '$9,300.00', description: 'Reimbursement for travel expenses.' },
      { invoice: '#INVO00010', customer: 'Charlotte Perez', date: 'Oct 30, 2019', amount: '$13,500.00', description: 'Refund for double billing error.' },
      { invoice: '#INVO00011', customer: 'William Thompson', date: 'Nov 15, 2019', amount: '$10,800.00', description: 'Credit for unused services.' },
      { invoice: '#INVO00012', customer: 'Amelia Harris', date: 'Dec 05, 2019', amount: '$12,900.00', description: 'Refund due to service dissatisfaction.' },
      { invoice: '#INVO00013', customer: 'Lucas Clark', date: 'Jan 20, 2020', amount: '$7,400.00', description: 'Adjustment for miscalculated fees.' },
      { invoice: '#INVO00014', customer: 'Harper Lewis', date: 'Feb 10, 2020', amount: '$16,700.00', description: 'Credit for promotional discount.' },
      { invoice: '#INVO00015', customer: 'Ethan Walker', date: 'Mar 25, 2020', amount: '$11,500.00', description: 'Refund for service interruption.' }
    ],
      
    ROLE_DATA : [
      { role: 'accountant', permissions: ['show dashboard', 'manage account', 'edit account', 'change password account', 'manage expense', 'create expense', 'edit expense', 'delete expense', 'manage invoice', 'create invoice', 'edit invoice', 'delete invoice', 'show invoice', 'create payment invoice', 'delete payment invoice', 'send invoice', 'delete invoice product', 'convert invoice', 'manage change password', 'manage constant unit', 'create constant unit', 'edit constant unit', 'delete constant unit', 'manage constant tax', 'create constant tax', 'edit constant tax', 'delete constant tax', 'manage constant category', 'create constant category', 'edit constant category', 'delete constant category', 'manage product & service', 'create product & service', 'edit product & service', 'delete product & service', 'manage customer', 'create customer', 'edit customer', 'delete customer', 'show customer', 'manage vender', 'create vender', 'edit vender', 'delete vender', 'show vender', 'manage bank account', 'create bank account', 'edit bank account', 'delete bank account', 'manage transfer', 'create transfer', 'edit transfer', 'delete transfer', 'manage transaction', 'manage revenue', 'create revenue', 'edit revenue', 'delete revenue', 'manage bill', 'create bill', 'edit bill', 'delete bill', 'show bill', 'manage payment', 'create payment', 'edit payment', 'delete payment', 'delete bill product', 'send bill', 'create payment bill', 'delete payment bill', 'income report', 'expense report', 'income vs expense report', 'tax report', 'loss & profit report', 'manage credit note', 'create credit note', 'edit credit note', 'delete credit note', 'manage debit note', 'create debit note', 'edit debit note', 'delete debit note', 'manage proposal', 'create proposal', 'edit proposal', 'delete proposal', 'duplicate proposal', 'show proposal', 'send proposal', 'delete proposal product', 'manage goal', 'create goal', 'edit goal', 'delete goal', 'manage assets', 'create assets', 'edit assets', 'delete assets', 'statement report', 'manage constant custom field', 'create constant custom field', 'edit constant custom field'] }
    ],

    TRANSACTION_DATA : [
        { date: 'Aug 17, 2022', account: 'ROUNDBANK Benjamin Adams', type: 'Partial', category: 'Invoice', description: '-', amount: '$531.87' },
        { date: 'Aug 17, 2022', account: '-', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00003', amount: '$531.86' },
        { date: 'Aug 17, 2022', account: '-', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00003', amount: '$531.86' },
        { date: 'Aug 17, 2022', account: 'ROUNDBANK Benjamin Adams', type: 'Partial', category: 'Invoice', description: 'invoice payment', amount: '$100.00' },
        { date: 'Aug 17, 2022', account: 'ROUNDBANK Benjamin Adams', type: 'Partial', category: 'Invoice', description: 'Invoice Payment', amount: '$500.00' },
        { date: 'Aug 17, 2022', account: '-', type: 'Partial', category: 'Retainer', description: '-', amount: '$100.00' },
        { date: 'Aug 17, 2022', account: '-', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00005', amount: '$100.00' },
        { date: 'Aug 17, 2022', account: '-', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00003', amount: '$100.00' },
        { date: 'Aug 17, 2022', account: '-', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00001', amount: '$100.00' },
        { date: 'Aug 17, 2022', account: 'ROUNDBANK Benjamin Adams', type: 'Partial', category: 'Retainer', description: 'retainer', amount: '$100.00' },
        { date: 'Aug 18, 2022', account: 'Stripe / Paypal', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00004', amount: '$200.00' },
        { date: 'Aug 18, 2022', account: 'Cash', type: 'CASH', category: 'Retainer', description: '-', amount: '$300.00' },
        { date: 'Aug 18, 2022', account: 'Benjamin Adams', type: 'Partial', category: 'Retainer', description: 'Retainer #RET00006', amount: '$400.00' },
        { date: 'Aug 18, 2022', account: 'Chisom Latifat', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00005', amount: '$600.00' },
        { date: 'Aug 18, 2022', account: 'Earl Hane MD', type: 'CASH', category: 'Invoice', description: 'Invoice Payment', amount: '$800.00' },
        { date: 'Aug 18, 2022', account: 'Deborah Hawkins', type: 'Partial', category: 'Invoice', description: '-', amount: '$1,000.00' },
        { date: 'Aug 18, 2022', account: 'Pearl Reed', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00007', amount: '$150.00' },
        { date: 'Aug 19, 2022', account: 'Stripe / Paypal', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00006', amount: '$700.00' },
        { date: 'Aug 19, 2022', account: 'Cash', type: 'CASH', category: 'Retainer', description: '-', amount: '$500.00' },
        { date: 'Aug 19, 2022', account: 'Benjamin Adams', type: 'Partial', category: 'Retainer', description: 'Retainer #RET00008', amount: '$650.00' },
        { date: 'Aug 19, 2022', account: 'Chisom Latifat', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00007', amount: '$780.00' },
        { date: 'Aug 19, 2022', account: 'Earl Hane MD', type: 'CASH', category: 'Invoice', description: 'Invoice Payment', amount: '$900.00' },
        { date: 'Aug 19, 2022', account: 'Deborah Hawkins', type: 'Partial', category: 'Invoice', description: '-', amount: '$1,200.00' },
        { date: 'Aug 19, 2022', account: 'Pearl Reed', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00009', amount: '$200.00' },
        { date: 'Aug 20, 2022', account: 'Stripe / Paypal', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00008', amount: '$850.00' },
        { date: 'Aug 20, 2022', account: 'Cash', type: 'CASH', category: 'Retainer', description: '-', amount: '$450.00' },
        { date: 'Aug 20, 2022', account: 'Benjamin Adams', type: 'Partial', category: 'Retainer', description: 'Retainer #RET00010', amount: '$500.00' },
        { date: 'Aug 20, 2022', account: 'Chisom Latifat', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00009', amount: '$620.00' },
        { date: 'Aug 20, 2022', account: 'Earl Hane MD', type: 'CASH', category: 'Invoice', description: 'Invoice Payment', amount: '$750.00' },
        { date: 'Aug 20, 2022', account: 'Deborah Hawkins', type: 'Partial', category: 'Invoice', description: '-', amount: '$1,300.00' },
        { date: 'Aug 20, 2022', account: 'Pearl Reed', type: 'PAYPAL', category: 'Retainer', description: 'Retainer #RET00011', amount: '$300.00' },
        { date: 'Aug 21, 2022', account: 'Stripe / Paypal', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00010', amount: '$920.00' },
        { date: 'Aug 21, 2022', account: 'Cash', type: 'CASH', category: 'Retainer', description: '-', amount: '$550.00' },
        { date: 'Aug 21, 2022', account: 'Benjamin Adams', type: 'Partial', category: 'Retainer', description: 'Retainer #RET00012', amount: '$600.00' },
        { date: 'Aug 21, 2022', account: 'Chisom Latifat', type: 'PAYPAL', category: 'Invoice', description: 'Invoice #INVO00011', amount: '$740.00' },
        ],

      ACCOUNTSTATEMENT_DATA: [
        { date: "Jan 28, 2023", amount: "$100.00", description: "Amet quis dolorem s" },
        { date: "Jan 15, 2023", amount: "$100.00", description: "Ut ipsum fugiat ull" },
        { date: "Jan 15, 2023", amount: "$100.00", description: "ADASD" },
        { date: "Feb 3, 2022", amount: "$5,000.00", description: "Consequatur Tenetur" },
        { date: "Feb 9, 2022", amount: "$5,000.00", description: "Et cillum omnis aliq" },
        { date: "Jul 8, 2020", amount: "$560.00", description: "Quis consequatur inv" },
        { date: "Jul 10, 2020", amount: "$3,000.00", description: "Amet quis dolorem s" },
        { date: "Jul 9, 2020", amount: "$2,000.00", description: "Ut ipsum fugiat ull" },
        { date: "Jul 8, 2020", amount: "$1,000.00", description: "Ea amet voluptas ma" }
      ]

});
