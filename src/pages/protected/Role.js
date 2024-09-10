import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import RolePage from '../../features/role'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Manage Roles"}))
      }, [])


    return(
        <RolePage />
    )
}

export default InternalPage