import React,{useContext}from 'react'
import { ListsContext } from '../../context/context'

function IncomeList() {
    const incomeArray = useContext(ListsContext)
    console.log(incomeArray)
    return (
        <div>
            <h2>Income</h2>
        </div>
    )
}

export default IncomeList
