import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import InvoiceSummary from '../../features/Report/InvoiceSummary'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report"}))
      }, [])


    return(
        <InvoiceSummary />
    )
}

export default InternalPage