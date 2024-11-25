import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CashFlow from '../../features/Report/CashFlow'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report"}))
      }, [])


    return(
        <CashFlow />
    )
}

export default InternalPage