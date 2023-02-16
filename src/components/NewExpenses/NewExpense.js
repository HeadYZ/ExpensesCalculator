import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = () => {

	const saveExpenseData = enteredData => {
		const expenseData = {
			...enteredData
		}
		console.log(expenseData);
	}


	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseData} />
		</div>
	)
}

export default NewExpense
