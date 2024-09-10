import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import NotificationTemplate from '../../features/NotificationTemplate'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Notification Template"}))
      }, [])


    return(
        <NotificationTemplate />
    )
}

export default InternalPage