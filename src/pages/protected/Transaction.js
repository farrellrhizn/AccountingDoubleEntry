import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import TransactionPage from '../../features/transaction'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Transaction"}))
      }, [])


    return(
        <TransactionPage />
    )
}

export default InternalPage