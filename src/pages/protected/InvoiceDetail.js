import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import InvoiceDetail from '../../features/invoice/detailInvoice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Invoice Detail"}))
      }, [])


    return(
        <InvoiceDetail />
    )
}

export default InternalPage