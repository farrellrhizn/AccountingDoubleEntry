import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProposalDetail from '../../features/proposaldetail/'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Proposal Detail"}))
      }, [])


    return(
        <ProposalDetail />
    )
}

export default InternalPage