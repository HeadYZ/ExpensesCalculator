import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {

	const [isEditing, setIsEditing] = useState(false)

	const saveExpenseData = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
		setIsEditing(false)
	}

	const startEditHandler = () => {
		setIsEditing(true)
	}
	const endEditHandler = () => {
		setIsEditing(false)
	}

	return (
		<div className='new-expense'>
		{!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}
		{	isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} stopEditing ={endEditHandler} />}
		</div>
	)
}

export default NewExpense
