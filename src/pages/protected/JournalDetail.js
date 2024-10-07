import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import JournalDetail from '../../features/journalacc/detailJournal'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Invoice Detail"}))
      }, [])


    return(
        <JournalDetail />
    )
}

export default InternalPage