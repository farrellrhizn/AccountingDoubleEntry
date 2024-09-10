import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManageRetainers from '../../features/PreSale/Retainers'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "PRE-SALE"}))
      }, [])


    return(
        <ManageRetainers />
    )
}

export default InternalPage