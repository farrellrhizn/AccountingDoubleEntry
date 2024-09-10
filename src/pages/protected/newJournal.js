import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import JournalDetailPage from '../../features/journalacc/newJournal';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Journal ID Details" }));
    }, [dispatch]); // Tambahkan `dispatch` ke array dependensi

    return (
        <JournalDetailPage />
    );
}

export default InternalPage;
