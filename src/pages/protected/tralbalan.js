import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import Tralbalan from '../../features/tralbalan';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Double Entry" }));
    }, [dispatch]);

    return (
        <Tralbalan/>
    );
}

export default InternalPage;