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
    console.log(description);
    console.log(amount);

    //Cant submit if amount is empty.
    if (amount === 0){
      return ;
    }
  }

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