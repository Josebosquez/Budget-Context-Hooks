import React, {useState} from 'react'
import {Header, Lists, Inputs  } from "./components";
import {InputContext, HeaderContext, ListContext} from "./context/context"

import "./App.css";

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  const [option, setOption] = useState("+")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const [incomeArray, setIncomeArray] = useState([])
  const [expenseList, setExpenseList] = useState([])

  function handleOption(value){
    setOption(value);
  }

  function handleDescription(value){
    setDescription(value);
  }

  function handleAmount(value){
    setAmount(value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(option);

    //Cant submit if amount is empty. set up validation for err msg later.
    if (amount === 0){
      return ;
    }
    // is it an expense or income?
    if (option === "+"){
      setIncome(income + parseFloat(amount)) // since amount is a string, we need to parse it to make a number
      setIncomeArray([...incomeArray, {description, amount}] ) // set it into the income array by spreading the array, adding the description and the amount.
    }else {
      setExpense(expense - parseFloat(amount))
      setExpenseList([...expenseList, {description, amount}])
    }
  }
  console.log(incomeArray)
  console.log(expenseList)

  const InputContextValue = {
    option, 
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
  }

  return (
    <div className='App'>
      <Header />

      <InputContext.Provider value={InputContextValue}>
      <Inputs />
      </InputContext.Provider>

      <Lists />
    </div>
  )
}

export default App
// how do we handle context and bring in all of these functions (handleOption, handleDescription, handleAmount, handleSubmit).