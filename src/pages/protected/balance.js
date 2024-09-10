import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Balance from '../../features/balance/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Balance Sheets"}))
      }, [])


    return(
        <Balance />
    )
}

export default InternalPage