import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Unit from '../../features/Constant/Unit'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Constant"}))
      }, [])


    return(
        <Unit />
    )
}

export default InternalPage