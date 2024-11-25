import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import BudgetPlanners from '../../features/BudgetPlanner'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Budget Planner"}))
      }, [])


    return(
        <BudgetPlanners />
    )
}

export default InternalPage