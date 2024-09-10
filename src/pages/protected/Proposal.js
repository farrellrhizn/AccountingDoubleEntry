import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import ProposalPage from '../../features/proposal';
function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Proposal" }));
    }, [dispatch]); // Tambahkan `dispatch` ke array dependensi

    return (
        <ProposalPage />
    );
}

export default InternalPage;
