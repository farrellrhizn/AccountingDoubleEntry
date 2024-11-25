import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductStockReport from '../../features/Report/ProductStock'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Stock"}))
      }, [])


    return(
        <ProductStockReport />
    )
}

export default InternalPage