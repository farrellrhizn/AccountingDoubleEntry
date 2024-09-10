import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AssetsPage from '../../features/assetspage/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Assets"}))
      }, [])


    return(
        <AssetsPage />
    )
}

export default InternalPage