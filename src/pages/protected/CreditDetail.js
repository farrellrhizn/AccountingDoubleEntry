import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CreditDetail from '../../features/creditdetail'
function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Credit Note Detail"}))
      }, [])


    return(
        <CreditDetail />
    )
}

export default InternalPage