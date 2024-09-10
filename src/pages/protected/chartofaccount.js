import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Coa from '../../features/chartofacc/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Chart Of Accounts"}))
      }, [])


    return(
        <Coa />
    )
}

export default InternalPage