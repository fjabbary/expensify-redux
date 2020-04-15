import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

function ExpenseList(props) {
    return (
        <div>
            <p>ExpenseList component</p>
            {props.expenses.map(item => <ExpenseListItem key={item.id} {...item} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
