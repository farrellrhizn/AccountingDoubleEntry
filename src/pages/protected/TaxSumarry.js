import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import TaxSummary from '../../features/Report/TaxSumarry'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report"}))
      }, [])


    return(
        <TaxSummary />
    )
}

export default InternalPage