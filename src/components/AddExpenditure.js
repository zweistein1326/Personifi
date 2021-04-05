import React from 'react';
import firebase from 'firebase';
import moment from 'moment';
import ShowExpenses from './ShowExpenses';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpenditure = ({ dispatch, history }) => {
    return (
        <div>
            <h3> Add Expense </h3>
            <ExpenseForm
                onSubmit={(expense) => {
                    dispatch(addExpense(expense))
                    history.push('/')
                }} />
            {/* <ShowExpenses /> */}
        </div>
    );
}

const mapStateToProps = (dispatch) => { }

export default connect()(AddExpenditure);