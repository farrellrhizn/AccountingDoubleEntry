import React from "react";
import TitleCard from "../../../components/Cards/TitleCard";

function Goal() {
  return (
    <TitleCard title="Goal">
      <div>
        <div className="card w-full bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <p>Name</p>
                <h2 className="font-bold">Invoice Goal</h2>
              </div>
              <div>
                <p>Type</p>
                <h2 className="font-bold">Invoice</h2>
              </div>
              <div>
                <p>Duration</p>
                <h2 className="font-bold">2020-07 To 2020-08</h2>
              </div>
              <div>
                <p>Target</p>
                <h2 className="font-bold">$0.00 of $5,000.00</h2>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <p>Progress</p>
                <div className="flex items-center">
                  <h2 className="font-bold mr-2">0.00%</h2>
                  <progress className="progress progress-success w-full" value="0" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p>Name</p>
              <h2 className="font-bold">Bill Goal</h2>
            </div>
            <div>
              <p>Type</p>
              <h2 className="font-bold">Bill</h2>
            </div>
            <div>
              <p>Duration</p>
              <h2 className="font-bold">2020-07 To 2020-09</h2>
            </div>
            <div>
              <p>Target</p>
              <h2 className="font-bold">$0.00 of $3,000.00</h2>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p>Progress</p>
              <div className="flex items-center">
                <h2 className="font-bold mr-2">0.00%</h2>
                <progress className="progress progress-success w-full" value="0" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p>Name</p>
              <h2 className="font-bold">Revenue Goal</h2>
            </div>
            <div>
              <p>Type</p>
              <h2 className="font-bold">Revenue</h2>
            </div>
            <div>
              <p>Duration</p>
              <h2 className="font-bold">2020-07 To 2020-09</h2>
            </div>
            <div>
              <p>Target</p>
              <h2 className="font-bold">$6,560.00 of $3,000.00</h2>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p>Progress</p>
              <div className="flex items-center">
                <h2 className="font-bold mr-2">218.67%</h2>
                <progress className="progress progress-success w-full" value="100" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p>Name</p>
              <h2 className="font-bold">Payment Goal</h2>
            </div>
            <div>
              <p>Type</p>
              <h2 className="font-bold">Payment</h2>
            </div>
            <div>
              <p>Duration</p>
              <h2 className="font-bold">2020-07 To 2020-08</h2>
            </div>
            <div>
              <p>Target</p>
              <h2 className="font-bold">$7,500.00 of $5,000.00</h2>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p>Progress</p>
              <div className="flex items-center">
                <h2 className="font-bold mr-2">150.00%</h2>
                <progress className="progress progress-success w-full" value="100" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
}

export default Goal;