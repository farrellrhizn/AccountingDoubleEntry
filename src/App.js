import React, { lazy, useEffect, Suspense } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))
const VendorDetail = lazy(() => import('./pages/protected/VendorDetail')); 
const ProposalDetail = lazy(() => import('./pages/protected/ProposalDetail'));
const InvoiceDetail = lazy(() => import('./pages/protected/InvoiceDetail'));
const CreditDetail = lazy(() => import('./pages/protected/CreditDetail'));
const JournalDetail = lazy(() => import('./pages/protected/JournalDetail'));
const ContractDetail = lazy(() => import('./pages/protected/ContractDetail'));

// Initializing different libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}> {/* Wrap with Suspense */}
          <Routes>
            {/* Other routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/documentation" element={<Documentation />} />
            
            {/* Routes for app */}
            <Route path="/app/*" element={<Layout />} />
              <Route path="/app/vendoracc/vendorDetail/" element={<VendorDetail />} />
              <Route path="/app/proposal/detailProposal" element={<ProposalDetail />} />
              <Route path="/app/invoice/detailInvoice" element={<InvoiceDetail />} />
              <Route path="/app/credit/detailCredit" element={<CreditDetail />} />
              <Route path="/app/journalacc/detailJournal" element={<JournalDetail />} />
              <Route path="/app/contract/detailContract" element={<ContractDetail />} />

            <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App
