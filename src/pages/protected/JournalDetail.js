import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import JournalDetail from '../../features/journaldetail/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Journal Detail"}))
      }, [])


    return(
        <JournalDetail />
    )
}

export default InternalPage