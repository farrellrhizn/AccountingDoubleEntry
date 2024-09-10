import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import InvoicePage from '../../features/invoice'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Invoice"}))
      }, [])


    return(
        <InvoicePage />
    )
}

export default InternalPage