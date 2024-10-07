import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CreditDetail from '../../features/creditnote/detailCredit'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Credit Detail"}))
      }, [])


    return(
        <CreditDetail />
    )
}

export default InternalPage