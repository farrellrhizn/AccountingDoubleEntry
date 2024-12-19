/** Icons are imported separatly to reduce build time */
// import BellIcon from '@heroicons/react/24/outline/BellIcon'
import { BellIcon, CubeIcon, DocumentTextIcon, ShoppingCartIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import BuildingLibraryIcon from '@heroicons/react/24/outline/BuildingLibraryIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import BanknotesIcon from '@heroicons/react/24/outline/BanknotesIcon'
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon'
import ChartBarSquareIcon from '@heroicons/react/24/outline/ChartBarSquareIcon'
import ClipBoardIcon from '@heroicons/react/24/outline/ClipboardIcon'
import ScaleIcon from '@heroicons/react/24/outline/ScaleIcon'
import DocumentChartBarIcon from '@heroicons/react/24/outline/DocumentChartBarIcon'
import BuildingStorefrontIcon from '@heroicons/react/24/outline/BuildingStorefrontIcon';

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [
  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard'
  },
  {
    path: '/app/Staff', // url
    icon: <UserIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Staff', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/StaffUser',
        icon: <UserIcon className={submenuIconClasses}/>,
        name: 'User',
      },
      {
        path: '/app/RolePage',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Role',
      },
    ]
  },
  {
    path: '/app/ProductService', // url
    icon: <CubeIcon className={iconClasses}/>, // icon component
    name: 'Product & Service', // name that appear in Sidebar
  },
  {
    path: '/app/ProductStock', // url
    icon: <TableCellsIcon className={iconClasses}/>, // icon component
    name: 'Product Stock', // name that appear in Sidebar
  },
  {
    path: '/app/Customers', // url
    icon: <UserIcon className={iconClasses}/>, // icon component
    name: 'Customers', // name that appear in Sidebar
  },
  {
    path: '/app/VendorAcc', // url
    icon: <BuildingStorefrontIcon className={iconClasses}/>, // icon component
    name: 'Vendor', // name that appear in Sidebar}
  },
  {
    path: '/app/Presale', // url
    icon: <CurrencyDollarIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Presale', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/ProposalPage',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Proposal',
      },
      {
        path: '/app/Retainers',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Retainers',
      },
    ]
    },
    {
      path: '', //no url needed as this has submenu
      icon: <BuildingLibraryIcon className={`${iconClasses} inline` }/>, // icon component
      name: 'Banking', // name that appear in Sidebar
      submenu : [
        {
          path: '/app/BankAcc',
          icon: <CreditCardIcon className={submenuIconClasses}/>,
          name: 'Bank Account',
        },
        {
          path: '/app/Transfer',
          icon: <CreditCardIcon className={submenuIconClasses}/>,
          name: 'Transfer',
        }
      ]
      },
    {
      path: '', //no url needed as this has submenu
      icon: <BanknotesIcon className={`${iconClasses} inline` }/>, // icon component
      name: 'Income', // name that appear in Sidebar
      submenu : [
        {
          path: '/app/InvoicePage',
          icon: <CreditCardIcon className={submenuIconClasses}/>,
          name: 'Invoice',
        },
        {
          path: '/app/Revenue',
          icon: <CreditCardIcon className={submenuIconClasses}/>,
          name: 'Revenue',
        },
        {
          path: '/app/CreditNote',
          icon: <CreditCardIcon className={submenuIconClasses}/>,
          name: 'Credit Note',
        }
      ]
    },
    {
      path: '/app/Expense', // url
      icon: <CurrencyDollarIcon className={`${iconClasses} inline` }/>, // icon component
      name: 'Expense', // name that appear in Sidebar
      submenu : [
        {
          path: '/app/Bill',
          icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
          name: 'Bill',
        },
        {
          path: '/app/Payment',
          icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
          name: 'Payment',
        },
        {
          path: '/app/DebitNote',
          icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
          name: 'Debit Note',
        },
      ]
    },
      {
        path: '', //no url needed as this has submenu
        icon: <BookOpenIcon className={`${iconClasses} inline` }/>, // icon component
        name: 'Double Entry', // name that appear in Sidebar
        submenu : [
          {
            path: '/app/ManageChartOfAccounts',
            icon: <ChartBarSquareIcon className={submenuIconClasses}/>,
            name: 'Chart of Accounts',
          },
          {
            path: '/app/journalacc',
            icon: <UsersIcon className={submenuIconClasses}/>,
            name: 'Journal Accounts',
          },
          {
            path: '/app/LedgerSummary',
            icon: <ClipBoardIcon className={submenuIconClasses}/>,
            name: 'Ledger Summary',
          },
          {
            path: '/app/balance',
            icon: <ScaleIcon className={submenuIconClasses}/>,
            name: 'Balance Sheets',
          },
          {
            path: '/app/Tralbalan',
            icon: <DocumentChartBarIcon className={submenuIconClasses} />,
            name: 'Trial Balance',
          },
        ]
      },    
  {
    path: '/app/BudgetPlanners', // url
    icon: <CreditCardIcon className={iconClasses}/>, // icon component
    name: 'Budget Planner', // name that appear in Sidebar
  },
  {
    path: '/app/Contract', // url
    icon: <DocumentTextIcon className={iconClasses}/>, // icon component
    name: 'Contract', // name that appear in Sidebar
  },
  {
    path: '/app/Goals', // url
    icon: <TrophyIcon className={iconClasses}/>, // icon component
    name: 'Goals', // name that appear in Sidebar
  },
  {
    path: '/app/AssetPage', // url
    icon: <BanknotesIcon className={iconClasses}/>, // icon component
    name: 'Assets', // name that appear in Sidebar
  },
  {
    path: '/app/OrderPage', // url
    icon: <ShoppingCartIcon className={iconClasses}/>, // icon component
    name: 'Order', // name that appear in Sidebar
  },
  {
    path: '/app/NotificationTemplate', // url
    icon: <BellIcon className={iconClasses}/>, // icon component
    name: 'Notification Template', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
    icon: <BookOpenIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Report', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/TransactionPage',
        icon: <ChartBarSquareIcon className={submenuIconClasses}/>,
        name: 'Transaction',
      },
      {
        path: '/app/AccountStatementPage',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'AccountStatement',
      },
      {
        path: '/app/IncomeSummary',
        icon: <ClipBoardIcon className={submenuIconClasses}/>,
        name: 'Income Summary',
      },
      {
        path: '/app/ExpenseSummary',
        icon: <ScaleIcon className={submenuIconClasses}/>,
        name: 'Expense Summary',
      },
      {
        path: '/app/IncomeVsExpense',
        icon: <DocumentChartBarIcon className={submenuIconClasses}/>,
        name: 'Income VS Expense',
      },
      {
        path: '/app/TaxSumarry',
        icon: <ChartBarSquareIcon className={submenuIconClasses}/>,
        name: 'Tax Summary',
      },
      {
        path: '/app/CashFlow',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Cash Flow',
      },
      {
        path: '/app/InvoiceSummary',
        icon: <ClipBoardIcon className={submenuIconClasses}/>,
        name: 'Invoice Summary',
      },
      {
        path: '/app/BillSummary',
        icon: <ScaleIcon className={submenuIconClasses}/>,
        name: 'Bill Summary',
      },
      {
        path: '/app/ProductStockReport',
        icon: <DocumentChartBarIcon className={submenuIconClasses}/>,
        name: 'Product Stock',
      },
    ]
  }

  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Pages', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/login',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
  //       name: 'Login',
  //     },
  //     {
  //       path: '/register', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Register', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/forgot-password',
  //       icon: <KeyIcon className={submenuIconClasses}/>,
  //       name: 'Forgot Password',
  //     },
  //     {
  //       path: '/app/blank',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Blank Page',
  //     },
  //     {
  //       path: '/app/404',
  //       icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
  //       name: '404',
  //     },
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Settings', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/settings-profile', //url
  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Profile', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/settings-billing',
  //       icon: <WalletIcon className={submenuIconClasses}/>,
  //       name: 'Billing',
  //     },
  //     {
  //       path: '/app/settings-team', // url
  //       icon: <UsersIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Team Members', // name that appear in Sidebar
  //     },
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Documentation', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/getting-started', // url
  //       icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Getting Started', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/features',
  //       icon: <TableCellsIcon className={submenuIconClasses}/>, 
  //       name: 'Features',
  //     },
  //     {
  //       path: '/app/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses}/>, 
  //       name: 'Components',
  //     }
  //   ]
  // },
  
];

export default routes


