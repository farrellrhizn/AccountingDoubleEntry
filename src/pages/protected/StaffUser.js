import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import staffUser from '../../features/staffuser';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Staff User" }));
    }, [dispatch]); // Tambahkan `dispatch` ke array dependensi

    return (
        <staffUser />
    );
}

export default InternalPage;
