import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Taxes from '../../features/Constant/Taxes/Index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])


    return(
        <Taxes />
    )
}

export default InternalPage