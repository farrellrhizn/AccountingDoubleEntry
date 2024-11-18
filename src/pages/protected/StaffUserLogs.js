import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import StaffUserLogs from '../../features/staffuserlogs';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Staff User" }));
    }, []);

    return (
        <StaffUserLogs />
    );
}

export default InternalPage;
