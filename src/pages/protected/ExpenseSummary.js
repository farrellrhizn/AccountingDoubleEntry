import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ExpenseSumPage from '../../features/expensesummary'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Expense Summary" }));
    }, []);
    
    return(
        <ExpenseSumPage />
    )
}

export default InternalPage