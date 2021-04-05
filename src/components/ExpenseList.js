import React from 'react';
import { connect } from 'react-redux'
import ExpenseTile from './ExpenseTile';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) => <ExpenseTile {...expense} key={expense.id} />)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
