import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = props => {
	const [filtredYear, setFiltredYear] = useState('2023')

	const filterChangeHandler = selectedYear => {
		setFiltredYear(selectedYear)
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler} />

			{props.items.map(expense => (
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</Card>
	)
}

export default Expenses
