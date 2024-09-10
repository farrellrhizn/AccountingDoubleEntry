import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./coaslice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import Datepicker from "react-tailwindcss-datepicker";
import DocMagnifierIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon"

const TopSideButtons = () => {
    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-4 btn-sm normal-case btn-primary justify-center" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

export default function Coa() {
    // const { leads } = useSelector(state => state.lead)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getLeadsContent())
    // }, [dispatch])

    // const getDummyStatus = (index) => {
    //     if (index % 5 === 0) return <div className="badge">Not Interested</div>
    //     else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>
    //     else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>
    //     else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>
    //     else return <div className="badge badge-ghost">Open</div>
    // }

    // const deleteCurrentLead = (index) => {
    //     dispatch(openModal({
    //         title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION,
    //         extraObject: { message: `Are you sure you want to delete this lead?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index }
    //     }))
    // }
    const iconClasses = `h-5 w-5 m-2 btn bg-transparent border-primary hover:bg-primary hover:text-white group`


    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setDateValue(newValue);
    }

    const handleSearch = () => {
        // Logic for search action
        console.log("Search clicked");
    }

    const handleReset = () => {
        setDateValue({
            startDate: new Date(),
            endDate: new Date()
        });
        // Additional reset logic if needed
        console.log("Reset clicked");
    }

    return (
        <>
            <TitleCard title="Manage Chart Accounts" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="flex items-center mb-4">
                    <Datepicker
                    containerClassName="w-72 mt-3"
                    value={dateValue}
                    theme={"light"}
                    inputClassName="input input-bordered w-72"
                    popoverDirection={"down"}
                    toggleClassName="invisible"
                    onChange={handleDatePickerValueChange}
                    showShortcuts={true}
                    primaryColor={"white"}
                    />
                    <div className="flex-grow"></div>
                    <div className="flex items-center">
                        <button className="w-16 h-10 btn btn-primary m-2" onClick={handleSearch}>Apply</button>
                        <button className="w-16 h-10 btn btn-secondary m-2" onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </TitleCard>

            <TitleCard title="Assets" topMargin="mt-2">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Parent Account Name</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1060</td>
                                <td><a href="#" class="text-primary">Checking Account</a></td>
                                <td>Current Asset</td>
                                <td>-</td>
                                <td>-</td>
                                <td><span className="bg-primary badge badge-success text-white p-3">Enabled</span></td>
                                <td>
                                    <button className={iconClasses}>
                                        <DocMagnifierIcon/>
                                    </button>
                                    <button class="btn btn-red"><i class="fas fa-trash-alt"></i></button>
                                </td>
                                </tr>
                            <tr>
                                <td>1065</td>
                                <td><a href="#" class="text-primary">Petty Cash</a></td>
                                <td>Current Asset</td>
                                <td>-</td>
                                <td>$90.00</td>
                                <td><span class="bg-primary badge badge-success text-white p-3">Enabled</span></td>
                                <td>
                                    <button class="btn btn-blue"><i class="fas fa-edit"></i></button>
                                    <button class="btn btn-red"><i class="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>1200</td>
                                <td><a href="#" class="text-primary">Account Receivables</a></td>
                                <td>Current Asset</td>
                                <td>-</td>
                                <td>-</td>
                                <td><span class="bg-primary badge badge-success text-white p-3">Enabled</span></td>
                                <td>
                                    <button class="btn btn-blue"><i class="fas fa-edit"></i></button>
                                    <button class="btn btn-red"><i class="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TitleCard>

            <TitleCard title="Liabilities" topMargin="mt-2">
            
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Parent Account Name</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>

            </TitleCard>

            <TitleCard title="Equity" topMargin="mt-2">
            
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Parent Account Name</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>

            </TitleCard>
        </>
    )
}
