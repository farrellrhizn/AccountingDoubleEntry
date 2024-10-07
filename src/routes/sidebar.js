/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import ScaleIcon from '@heroicons/react/24/outline/ScaleIcon'
import ChartBarSquareIcon from '@heroicons/react/24/outline/ChartBarSquareIcon' 
import ClipBoardIcon from '@heroicons/react/24/outline/ClipboardIcon'
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon'
import DocumentChartBarIcon from '@heroicons/react/24/outline/DocumentChartBarIcon'
import BuildingLibraryIcon from '@heroicons/react/24/outline/BuildingLibraryIcon'
import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [
  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard'
  },


  //   path: '/app/leads', // url
  //   icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
  //   name: 'Leads', // name that appear in Sidebar
  // },
  // {
  //   path: '/app/transactions', // url
  //   icon: <CurrencyDollarIcon className={iconClasses}/>, // icon component
  //   name: 'Transactions', // name that appear in Sidebar
  // },
  // {
  //   path: '/app/charts', // url
  //   icon: <ChartBarIcon className={iconClasses}/>, // icon component
  //   name: 'Analytics', // name that appear in Sidebar
  // },
  // {
  //   path: '/app/integration', // url
  //   icon: <BoltIcon className={iconClasses}/>, // icon component
  //   name: 'Integration', // name that appear in Sidebar
  // },
  // {
  //   path: '/app/calendar', // url
  //   icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
  //   name: 'Calendar', // name that appear in Sidebar
  // },
  {
    path: '', //no url needed as this has submenu
    icon: <BookOpenIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Staff', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/StaffUser',
        icon: <UserIcon className={submenuIconClasses}/>,
        name: 'User',
      },
      {
        path: '/app/Role',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Role',
      }
    ]
    },
  {
    path: '/app/ProductStock', // url
    icon: <TableCellsIcon className={iconClasses}/>, // icon component
    name: 'Product Stock', // name that appear in Sidebar
  },
  {
    path: '/app/VendorAcc', // url
    icon: <WalletIcon className={iconClasses}/>, // icon component
    name: 'Vendor', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
    icon: <UsersIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Presale', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/Proposal',
        icon: <BookOpenIcon className={submenuIconClasses}/>,
        name: 'Proposal',
      },
      {
        path: '/app/',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Retainers',
      }
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
          path: '/app/',
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
          path: '/app/',
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
        path: '', //no url needed as this has submenu
        icon: <BookOpenIcon className={`${iconClasses} inline` }/>, // icon component
        name: 'Double Entry', // name that appear in Sidebar
        submenu : [
          {
            path: '/app/chartofacc',
            icon: <ChartBarSquareIcon className={submenuIconClasses}/>,
            name: 'Chart of Accounts',
          },
          {
            path: '/app/journalacc',
            icon: <UsersIcon className={submenuIconClasses}/>,
            name: 'Journal Accounts',
          },
          {
            path: '/app/404',
            icon: <ClipBoardIcon className={submenuIconClasses}/>,
            name: 'Ledger Summary',
          },
          {
            path: '/app/balance',
            icon: <ScaleIcon className={submenuIconClasses}/>,
            name: 'Balance Sheets',
          },
          {
            path: '/app/TrialBalance',
            icon: <DocumentChartBarIcon className={submenuIconClasses}/>,
            name: 'Trial Balance',
          },
        ]
      },    
  {
    path: '/app/Contract', // url
    icon: <CodeBracketSquareIcon className={iconClasses}/>, // icon component
    name: 'Contract', // name that appear in Sidebar
  },
  {
    path: '/app/AssetsPage', // url
    icon: <WalletIcon className={iconClasses}/>, // icon component
    name: 'Assets Page', // name that appear in Sidebar
  },
  {
    path: '/app/OrderPage', // url
    icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
    name: 'Order Page', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
    icon: <BookOpenIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Report', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/Transaction',
        icon: <ChartBarSquareIcon className={submenuIconClasses}/>,
        name: 'Transaction',
      },
      {
        path: '/app/AccountStatement',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Account Statement',
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
    ]
  },
  
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
  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Billing',
      },
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },
    ]
  },
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
  
]

export default routes


