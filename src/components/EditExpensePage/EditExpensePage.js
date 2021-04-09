import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
// import ExpenseForm from './ExpenseForm'

class EditExpensePage extends React.Component {
    onRemove = () => {
        console.log(this.props.expense.id)
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/dashboard')
    }
    onSubmit = (expense) => {
        this.props.startEditExpense({ id: this.props.expense.id, updates: expense })
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <h1><ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} /></h1>
                <button onClick={this.onRemove}>Remove Expense</button>
            </div >);
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)