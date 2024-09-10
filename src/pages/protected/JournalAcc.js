import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import JournalAcc from '../../features/journalacc/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Journal Accounts"}))
      }, [])


    return(
        <JournalAcc />
    )
}

export default InternalPage