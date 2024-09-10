import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManageDebitNote from '../../features/Expance/DebitNote'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Expance"}))
      }, [])


    return(
        <ManageDebitNote />
    )
}

export default InternalPage