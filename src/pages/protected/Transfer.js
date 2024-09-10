import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManageTransfer from '../../features/Banking/Transfer/Index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Banking"}))
      }, [])


    return(
        <ManageTransfer />
    )
}

export default InternalPage