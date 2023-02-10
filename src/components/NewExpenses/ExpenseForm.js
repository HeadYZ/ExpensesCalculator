import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTittle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	const titleChangeHandler = e => {
		setEnteredTittle(e.target.value)
	}
	const amountChangeHandler = e => {
		setEnteredAmount(e.target.value)
	}
	const dateChangeHandler = e => {
		setEnteredDate(e.target.value)
	}




	console.log(enteredTitle);
	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label className=''>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01'  onChange={amountChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2022-12-01' max='2024-12-31'  onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions '>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm