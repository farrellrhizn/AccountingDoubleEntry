import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ContractDetail from '../../features/contractdetail'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Contract Detail"}))
      }, [])


    return(
        <ContractDetail />
    )
}

export default InternalPage