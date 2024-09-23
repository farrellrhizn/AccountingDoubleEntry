// All components mapping with path for internal routes

import { TrashIcon } from '@heroicons/react/24/outline'
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


const routes = [
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
