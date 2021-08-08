import React, { useContext } from 'react'
import { ListsContext } from '../../context/context'

function IncomeList() {
    const {incomeArray} = useContext(ListsContext)

    return (
        <div>
            <h2>Income</h2>
            <ul>
                {incomeArray.map((income, index) => {
                    return (
                        <li key={index}>
                            <span>{income.description}</span>
                            <span>{income.amount}</span>
                            <button> Delete</button>
                            <br/>
                        </li>
                    );
                })
                }
            </ul>
        </div>
    )
}

export default IncomeList
