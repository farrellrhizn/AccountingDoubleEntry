import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
// import { deleteLead, getLeadsContent } from "./coaslice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import Datepicker from "react-tailwindcss-datepicker";
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import DocumentPlus from '@heroicons/react/24/outline/DocumentPlusIcon'
import PrinterIcon from '@heroicons/react/24/outline/PrinterIcon'

const iconClasses = `h-5 w-5`
// const TopSideButtons = () => {
    // const dispatch = useDispatch()

    // const openAddNewLeadModal = () => {
    //     dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }))
    // }

    // return (
    //     <div className="inline-block float-right">
    //         <button className="btn px-4 btn-sm normal-case btn-primary justify-center" onClick={() => openAddNewLeadModal()}>Add New</button>
    //     </div>
    const TopSideButtons = () => {
        return (
          <div className="flex space-x-2">
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white">{'<|>'}</button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white"><FunnelIcon className={iconClasses}/></button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white"><DocumentPlus className={iconClasses}/></button>
            <button className="text-black bg-transparent border-primary btn hover:bg-primary hover:text-white"><PrinterIcon className={iconClasses}/></button>
          </div>
        );
      };

export default function Trialbalance() {
  
    return (
        <>
            <TitleCard title="Trial Balance" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
        
                {/* <!-- Table Section --> */}
                <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                        <th className="px-4 py-2 text-left text-lg text-black bg-transparent">Account</th>
                        <th className="px-4 py-2 text-left text-lg text-black bg-transparent">Account Code</th>
                        <th className="px-4 py-2 text-right text-lg text-black bg-transparent">Debit</th>
                        <th className="px-4 py-2 text-right text-lg text-black bg-transparent">Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-4 py-2 text-left font-bold">Assets</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Petty Cash</td>
                        <td className="px-4 py-2">1065</td>
                        <td className="px-4 py-2 text-right text-primary">$20.00</td>
                        <td className="px-4 py-2 text-right text-primary">$110.00</td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Inventory</td>
                        <td className="px-4 py-2">1510</td>
                        <td className="px-4 py-2 text-right text-primary">$50.00</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Accum.depreciation-Motor Vehicle</td>
                        <td className="px-4 py-2">1845</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 text-left font-bold">Income</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Sales Income</td>
                        <td className="px-4 py-2">4010</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        <td className="px-4 py-2 text-right text-primary">$110.00</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 text-left font-bold">Costs of Goods Sold</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Cost of Sales- On Services</td>
                        <td className="px-4 py-2">5005</td>
                        <td className="px-4 py-2 text-right text-primary">$220.25</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 text-left font-bold">Expenses</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="px-8 py-2 text-left text-primary">Rent Paid</td>
                        <td className="px-4 py-2">5760</td>
                        <td className="px-4 py-2 text-right text-primary">$200.00</td>
                        <td className="px-4 py-2 text-right text-primary">$0.00</td>
                        </tr>
                        <tr className="font-bold">
                        <td className="px-4 py-2 text-left">Total</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2 text-right">$490.25</td>
                        <td className="px-4 py-2 text-right">$220.00</td>
                        </tr>
                    </tbody>
                    </table>

                </div>

            </TitleCard>
        </>
    )
}
