import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Trialbalance from '../../features/trlbalance'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Trial Balance"}))
      }, [])


    return(
        <Trialbalance />
    )
}

export default InternalPage