import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import StaffUser from '../../features/staffuser';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Staff User" }));
    }, []);

    return (
        <StaffUser />
    );
}

export default InternalPage;
