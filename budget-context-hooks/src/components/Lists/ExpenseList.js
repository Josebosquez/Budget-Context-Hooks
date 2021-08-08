import React, {useContext} from 'react'
import { ListsContext } from '../../context/context'

function ExpenseList() {
    const {expenseList} = useContext(ListsContext)

    return (
        <div>
            <h2>Expense</h2>
            <ul>
                {expenseList.map((expense, index) => {
                    return (
                        <li key={index}>
                            <span>{expense.description}</span>
                            <span>{expense.amount}</span>
                            <button> Delete</button>
                            <br />
                        </li>
                    );
                })
                }
            </ul>
        </div>
    )
}

export default ExpenseList
