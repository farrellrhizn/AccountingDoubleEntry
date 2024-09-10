import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import OrderPage from '../../features/order'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Order"}))
      }, [])


    return(
        <OrderPage />
    )
}

export default InternalPage