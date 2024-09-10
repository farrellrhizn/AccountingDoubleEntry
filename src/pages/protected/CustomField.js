import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CustomField from '../../features/Constant/CustomField'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])


    return(
        <CustomField />
    )
}

export default InternalPage