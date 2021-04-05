import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
// import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
    return (
        <div>
            <h1><ExpenseForm expense={props.expense} onSubmit={(expense) => {
                console.log(expense)
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/')
            }} /></h1>
            <button onClick={() => {
                console.log('removing')
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove Expense</button>
        </div>);
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)