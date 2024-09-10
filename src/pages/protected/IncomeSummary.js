import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import IncomeSumPage from '../../features/incomesummary'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Income Summary"}))
      }, [])


    return(
        <IncomeSumPage />
    )
}

export default InternalPage