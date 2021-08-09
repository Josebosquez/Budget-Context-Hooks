import React, { useState, useEffect } from 'react'
import { Header, Lists, Inputs } from "./components";
import { InputContext, HeaderContext, ListsContext } from "./context/context"

import "./App.css";

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  const [option, setOption] = useState("+")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const [incomeArray, setIncomeArray] = useState([])
  const [expenseList, setExpenseList] = useState([])

  useEffect(() => {
    setLocalStorage();
  }, [income, expense, incomeArray, expenseList])

  function setLocalStorage(){ // set local storage to remember my variables.
    window.localStorage.setItem('income', income);
    window.localStorage.setItem('expense', expense);
    window.localStorage.setItem('incomeArray', JSON.stringify(incomeArray)) 
    window.localStorage.setItem('expenseList', JSON.stringify(expenseList))
    

  }

  function handleOption(value) {
    setOption(value);
  }

  function handleDescription(value) {
    setDescription(value);
  }

  function handleAmount(value) {
    setAmount(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(option);

    //Cant submit if amount is empty. set up validation for err msg later.
    if (amount === 0) {
      return;
    }
    // is it an expense or income?
    if (option === "+") {
      setIncome(income + parseFloat(amount)) // since amount is a string, we need to parse it to make a number
      setIncomeArray([...incomeArray, { description, amount }]) // set it into the income array by spreading the array, adding the description and the amount.
    } else {
      setExpense(expense + parseFloat(amount))
      setExpenseList([...expenseList, { description, amount }])
    };

    reset();
  }

  function handleDeleteIncome(index) {
    let incomeItemToDelete = incomeArray[index]

    setIncome(income - incomeItemToDelete.amount)

    let newIncomeArray = [...incomeArray];

    newIncomeArray.splice(index, 1);

    setIncomeArray(newIncomeArray)
  }

  function handleDeleteExpense(index) {
    let expenseItemToDelete = expenseList[index]

    setExpense(expense - expenseItemToDelete.amount)

    let newExpenseArray = Object.assign([], expenseList);
    console.log(newExpenseArray)

    newExpenseArray.splice(index, 1)

    setExpenseList(newExpenseArray)
  
  }

  function reset (){
    setAmount(0)
    setDescription('')
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

  const HeaderContextValue = { income, expense }

  const ListContextValue = { incomeArray, expenseList, handleDeleteExpense, handleDeleteIncome }

  return (
    <div className='App'>
      <HeaderContext.Provider value={HeaderContextValue}>
        <Header />
      </HeaderContext.Provider>

      <InputContext.Provider value={InputContextValue}>
        <Inputs />
      </InputContext.Provider>

      <ListsContext.Provider value={ListContextValue}>
        <Lists />
      </ListsContext.Provider>
    </div>
  )
}

export default App
// how do we handle context and bring in all of these functions (handleOption, handleDescription, handleAmount, handleSubmit).