import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import VendorDetail from '../../features/vendordetail/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Vendor Detail"}))
      }, [])


    return(
        <VendorDetail />
    )
}

export default InternalPage