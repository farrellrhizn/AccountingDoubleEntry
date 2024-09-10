import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AccountStatementPage from '../../features/accountstatement'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Account Statement Summary"}))
      }, [])


    return(
        <AccountStatementPage />
    )
}

export default InternalPage