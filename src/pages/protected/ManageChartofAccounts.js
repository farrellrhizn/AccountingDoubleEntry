import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManageChartOfAccounts from '../../features/ManageChartOfAccounts'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])


    return(
        <ManageChartOfAccounts />
    )
}

export default InternalPage