import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManageRevenue from '../../features/Income/Revenue'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Income"}))
      }, [])


    return(
        <ManageRevenue />
    )
}

export default InternalPage