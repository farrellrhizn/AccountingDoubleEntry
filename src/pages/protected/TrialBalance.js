import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import TrialBalance from '../../features/TrialBalance'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Double Entry"}))
      }, [])


    return(
        <TrialBalance />
    )
}

export default InternalPage