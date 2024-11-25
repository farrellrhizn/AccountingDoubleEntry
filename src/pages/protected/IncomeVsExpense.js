import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import IncomeVSExpense from '../../features/incomevsexpense'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Income VS Expense Summary"}))
      }, [])


    return(
        <IncomeVSExpense />
    )
}

export default InternalPage