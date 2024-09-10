import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ContractType from '../../features/Constant/ContractType'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])


    return(
        <ContractType />
    )
}

export default InternalPage