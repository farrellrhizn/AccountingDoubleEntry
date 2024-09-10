import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductStock from '../../features/productstock'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Stock"}))
      }, [])


    return(
        <ProductStock />
    )
}

export default InternalPage