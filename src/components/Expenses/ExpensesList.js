import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    }

	return (
		<li>
			{props.items.length > 0 &&
				props.items.map(expense => (
					<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
				))}
		</li>
	)
}

export default ExpensesList
