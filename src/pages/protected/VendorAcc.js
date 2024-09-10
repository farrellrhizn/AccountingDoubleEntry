import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import VendorAcc from '../../features/vendoracc'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Vendor"}))
      }, [])


    return(
        <VendorAcc />
    )
}

export default InternalPage