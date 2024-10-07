// All components mapping with path for internal routes

import { elements } from 'chart.js'
import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const ChartOfAccounts = lazy(() => import('../pages/protected/chartofaccount'))
const JournalAccount = lazy(() => import('../pages/protected/JournalAcc'))
const Balance = lazy(() => import('../pages/protected/balance'))
const TrialBalance = lazy(() => import('../pages/protected/TrialBalance'))
const NewJournal = lazy(() => import('../pages/protected/newJournal'))
const ProductStock = lazy(() => import('../pages/protected/ProductStock'))
const VendorAcc = lazy(() => import('../pages/protected/VendorAcc'))
const Contract = lazy(() => import('../pages/protected/Contract'))
const AssetsPage = lazy(() => import('../pages/protected/assetspage'))
const OrderPage = lazy(() => import('../pages/protected/order'))
const staffUser = lazy(() => import('../pages/protected/StaffUser'))
const ProposalPage = lazy(() => import('../pages/protected/Proposal'))
const BankAcc = lazy(() => import('../pages/protected/BankAcc'))
const InvoicePage = lazy(() => import('../pages/protected/Invoice'))
const CreditNote = lazy(() => import('../pages/protected/CreditNote'))
const RolePage = lazy(() => import('../pages/protected/Role'))
const TransactionPage = lazy(() => import('../pages/protected/Transaction'))
const ContractDetail = lazy(() => import('../pages/protected/Contract'))
const AccountStatementPage = lazy(() => import('../pages/protected/AccountStatement'))
const IncomeSumPage = lazy(() => import('../pages/protected/IncomeSummary'))
const ExpenseSumPage = lazy(() => import('../pages/protected/ExpenseSummary'))
const IncomeVSExpense = lazy(() => import('../pages/protected/IncomeVsExpense'))
const VendorDetail = lazy(() => import('../pages/protected/VendorDetail'))

const routes = [
  {
    path: '/vendorDetail/',  // Add dynamic ID parameter here
    component: VendorDetail,

  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/ProductStock', // the url
    component: ProductStock, // view rendered
  },
  {
    path: '/contractDetail', // the url
    component: ContractDetail, // view rendered
  },
  {
    path: '/BankAcc', // the url
    component: BankAcc, // view rendered
  },
  {
    path: '/InvoicePage', // the url
    component: InvoicePage, // view rendered
  },
  {
    path: '/Transaction', // the url
    component: TransactionPage, // view rendered
  },
  {
    path: '/AccountStatement', // the url
    component: AccountStatementPage, // view rendered
  },
  {
    path: '/incomeSummary', // the url
    component: IncomeSumPage, // view rendered
  },
  {
    path: '/ExpenseSummary', // the url
    component: ExpenseSumPage, // view rendered
  },
  {
    path: '/IncomeVsExpense', // the url
    component: IncomeVSExpense, // view rendered
  },
  {
    path: '/CreditNote', // the url
    component: CreditNote, // view rendered
  },
  {
    path: '/VendorAcc', // the url
    component: VendorAcc, // view rendered
  },
  {
    path: '/Proposal', // the url
    component: ProposalPage, // view rendered
  },
  {
    path: '/Contract', // the url
    component: Contract, // view rendered
  },
  {
    path: '/AssetsPage', // the url
    component: AssetsPage, // view rendered
  },
  {
    path: '/OrderPage', // the url
    component: OrderPage, // view rendered
  },
  {
    path: '/staffUser', // the url
    component: staffUser, // view rendered
  },
  {
    path: '/role', // the url
    component: RolePage, // view rendered
  },
  {
    path: '/NewJournal', // the url
    component: NewJournal, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/chartofacc',
    component: ChartOfAccounts,
  },
  {
    path: '/journalacc',
    component: JournalAccount,
  },
  {
    path: '/balance',
    component: Balance,
  },
  {
    path: '/trialbalance',
    component: TrialBalance,
  },
  
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
