import React, {useState} from 'react'
import {Header, Lists, Inputs  } from "./components";

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
  }

  return (
    <div className='App'>
      <Header/>

      <Inputs/>

      <Lists/>
    </div>
  )
}

export default App
// how do we handle context and bring in all of these functions (handleOption, handleDescription, handleAmount, handleSubmit).