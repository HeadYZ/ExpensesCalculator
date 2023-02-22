import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = props => {
	const [filtredYear, setFiltredYear] = useState('2023')

	const filterChangeHandler = selectedYear => {
		setFiltredYear(selectedYear)
	}

	const filtredExpensesByYear = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filtredYear
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler} />
		<ExpensesChart expenses={filtredExpensesByYear} />
		<ul>
		<ExpensesList items={filtredExpensesByYear} />
		</ul>

		</Card>
	)
}

export default Expenses
