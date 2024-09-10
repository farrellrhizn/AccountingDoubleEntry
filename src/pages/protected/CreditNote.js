import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CreditPage from '../../features/creditnote'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Credit Note"}))
      }, [])


    return(
        <CreditPage />
    )
}

export default InternalPage