import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import BillSummary from '../../features/Report/BillSummary'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report"}))
      }, [])


    return(
        <BillSummary />
    )
}

export default InternalPage