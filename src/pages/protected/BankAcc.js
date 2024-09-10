import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import BankAcc from '../../features/bankacc'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Account"}))
      }, [])


    return(
        <BankAcc />
    )
}

export default InternalPage