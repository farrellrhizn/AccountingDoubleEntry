// All components mapping with path for internal routes

import { elements } from 'chart.js'
import { lazy } from 'react'
// import BudgetPlanners from '../features/BudgetPlanner'


const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const ProductService = lazy(() => import('../pages/protected/ProductService'))
const Customers = lazy(() => import('../pages/protected/Customers'))
const BudgetPlanner = lazy(() => import('../pages/protected/BudgetPlanners'))
const Goals = lazy(() => import('../pages/protected/Goals'))
const Retainers = lazy(() => import('../pages/protected/Retainers'))
const Transfer = lazy(() => import('../pages/protected/Transfer'))
const Revenue = lazy(() => import('../pages/protected/Revenue'))
const TaxSumarry= lazy(() => import('../pages/protected/TaxSumarry'))
const InvoiceSummary= lazy(() => import('../pages/protected/InvoiceSummary'))
const BillSummary= lazy(() => import('../pages/protected/BillSummary'))
const ProductStock= lazy(() => import('../pages/protected/ProductStock'))
const Taxes= lazy(() => import('../pages/protected/Taxes'))
const Unit= lazy(() => import('../pages/protected/Unit'))
const ContractType= lazy(() => import('../pages/protected/ContractType'))
const Category= lazy(() => import('../pages/protected/Category'))
const CustomField= lazy(() => import('../pages/protected/CustomField'))
const CashFlow= lazy(() => import('../pages/protected/CashFlow'))
const Bill = lazy(() => import('../pages/protected/Bill'))
const DebitNote = lazy(() => import('../pages/protected/DebitNote'))
const NotificationTemplate = lazy(() => import('../pages/protected/NotificationTemplate'))
const Welcome = lazy(() => import('../pages/protected/Dashboard'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
// const Transactions = lazy(() => import('../pages/protected/Transactions'))
const LedgerSummary = lazy(() => import('../pages/protected/LedgerSummary'))
const ManageChartofAccounts = lazy(() => import('../pages/protected/ManageChartofAccounts'))
const TrialBalance = lazy(() => import('../pages/protected/TrialBalance'))
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
const AccountStatementPage = lazy(() => import('../pages/protected/AccountStatement'))
const IncomeSumPage = lazy(() => import('../pages/protected/IncomeSummary'))
const ExpenseSumPage = lazy(() => import('../pages/protected/ExpenseSummary'))
const IncomeVSExpense = lazy(() => import('../pages/protected/IncomeVsExpense'))
const StaffUserLogs = lazy(() => import('../pages/protected/StaffUserLogs'))
const VendorDetail = lazy(() => import('../pages/protected/VendorDetail'))
const ProposalDetail = lazy(() => import('../pages/protected/ProposalDetail'))
const InvoiceDetail = lazy(() => import('../pages/protected/InvoiceDetail'))
const CreditDetail = lazy(() => import('../pages/protected/CreditDetail'))
const JournalDetail = lazy(() => import('../pages/protected/JournalDetail'))
const ContractDetail = lazy(() => import('../pages/protected/ContractDetail'))

const routes = [
  {
    path: '/ContractDetail/',  // Add dynamic ID parameter here
    component: ContractDetail,
  },
  {
    path: '/JournalDetail/',  // Add dynamic ID parameter here
    component: JournalDetail,
  },
  {
    path: '/CreditDetail/',  // Add dynamic ID parameter here
    component: CreditDetail,
  },
  {
    path: '/InvoiceDetail/',  // Add dynamic ID parameter here
    component: InvoiceDetail,
  },
  {
    path: '/ProposalDetail/',  // Add dynamic ID parameter here
    component: ProposalDetail,
  },
  {
    path: '/VendorDetail/',  // Add dynamic ID parameter here
    component: VendorDetail,
  },
  {
    path: '/StaffUserLogs',
    component: StaffUserLogs,
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/ProductService', // the url
    component: ProductService,
  },
  {
    path: '/Customers', // the url
    component: Customers,
  },
  {
    path: '/BudgetPlanners', // the url
    component: BudgetPlanner,
  },
  {
    path: '/Goals', // the url
    component: Goals,
  },
  {
    path: '/NotificationTemplate', // the url
    component: NotificationTemplate,
  },
  {
    path: '/Retainers', // the url
    component: Retainers,
  },
  {
    path: '/Transfer', // the url
    component: Transfer,
  },
  {
    path: '/Revenue', // the url
    component: Revenue,
  },
  {
    path: '/CashFlow', // the url
    component: CashFlow,
  },
  {
    path: '/TaxSumarry', // the url
    component: TaxSumarry,

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
    path: '/InvoiceSummary', // the url
    component: InvoiceSummary,
  },
  {
    path: '/BillSummary', // the url
    component: BillSummary,
  },
  {
    path: '/ProductStock', // the url
    component: ProductStock,
  },
  {
    path: '/Taxes', // the url
    component: Taxes,
  },
  {
    path: '/Category', // the url
    component: Category,
  },
  {
    path: '/CustomField', // the url
    component: CustomField,
  },
  {
    path: '/Unit', // the url
    component: Unit,
  },
  {
    path: '/Bill', // the url
    component: Bill,
  },
  {
    path: '/ContractType', // the url
    component: ContractType,
  },
  {
    path: '/DebitNote', // the url
    component: DebitNote,
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
    path: '/ManageChartOfAccounts',
    component: ManageChartofAccounts,
  },
  {
    path: '/LedgerSummary',
    component: LedgerSummary,
  },
  {
    path: '/TrialBalance',
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
