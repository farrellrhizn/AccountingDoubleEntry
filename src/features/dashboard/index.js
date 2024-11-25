
import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import UserChannels from "./components/UserChannels";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import TitleCard from "../../components/Cards/TitleCard";
import { useState } from "react";
import AccountStat from "./components/AccountStat";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseChart from "./components/ExpenseChart";
import RecentInvoice from "./components/RecentInvoice";
import InvoiceStats from "./components/InvoiceStats";
import RecentBills from "./components/RecentBills";
import BillStats from "./components/BillStats";
import Goal from "./components/Goal";

const statsData = [
  {
    title: "Total Customers",
    value: "11",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Vendors",
    value: "10",
    icon: <DocumentIcon className="w-8 h-8" />,
    description: "Current month",
  },
];

const statsData2 = [
  {
    title: "Total Invoices",
    value: "20",
    icon: <DocumentTextIcon className="w-8 h-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Total Bills",
    value: "9",
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/* ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/* ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-6 gap-6">
          {statsData.map((d, k) => (
            <DashboardStats key={k} {...d} colorIndex={k} />
          ))}
          {statsData2.map((d, k) => (
            <DashboardStats
              key={k + statsData.length}
              {...d}
              colorIndex={k + statsData.length}
            />
          ))}
        </div>
        <div className="w-full h-full">
          <LineChart />
        </div>
      </div>

      {/* ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
        <AccountStat />

        {/* Make this div responsive to have 1 column on large screens, 2 on medium, and 1 on small screens */}
        <div className="grid lg:grid-cols-1 md:grid-cols-1 w-130 sm:grid-cols-1 grid-cols-1 gap-6">
          <div className="grid grid-cols-1 mt-6 gap-6">
            <AmountStats />
            <PageStats />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 mt-4">
        <BarChart />
      </div>

      {/* ---------------------- User source channels table ------------------------- */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        <UserChannels />
        <DoughnutChart />
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        <ExpenseTable />
        <ExpenseChart />
      </div>

      <div className="grid lg:grid-cols-10 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        {/* RecentInvoice dengan ukuran 60% */}
        <div className="lg:col-span-6 md:col-span-2 col-span-1">
          <RecentInvoice />
        </div>
        {/* InvoiceStats dengan ukuran 40% */}
        <div className="lg:col-span-4 md:col-span-2 col-span-1">
          <InvoiceStats />
        </div>
      </div>

      <div className="grid lg:grid-cols-10 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        {/* RecentInvoice dengan ukuran 60% */}
        <div className="lg:col-span-6 md:col-span-2 col-span-1">
          <RecentBills />
        </div>
        {/* InvoiceStats dengan ukuran 40% */}
        <div className="lg:col-span-4 md:col-span-2 col-span-1">
          <BillStats />
        </div>
      </div>

      <div>
        <div className="w-full">
          <Goal />
        </div>
      </div>
    </>
  );

}

export default Dashboard