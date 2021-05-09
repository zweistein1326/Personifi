import React from 'react';
import { connect } from 'react-redux'
import ExpenseTile from './ExpenseTile';
import selectExpenses from '../../selectors/expenses'
import styles from './expenseList.module.css';

const ExpenseList = (props) => {

    var total = new Map();
    const toggleFilterDate = (e) => {
        e.preventDefault();
        //sort by ascending or descending order of date
    }

    const toggleFilterAmount = (e) => {
        e.preventDefault();
        //sort by ascending or descending order of amount
    }

    const calculateTotal = (amount, currency) => {
        if (total.has(currency)) {
            var totalAmount = total.get(currency)
            total.set(currency, amount + totalAmount)
        }
        else {
            total.set(currency, amount)
        }
    }

    props.expenses.forEach((expense) => {
        calculateTotal(expense.amount, expense.currency);
    })

    let keys = Array.from(total.keys())

    return (
        <div className={styles.expenseList}>
            <h3 className={styles.total}>
                Total: {keys.map((key, index) =>
                <p style={{ display: 'inline' }}>{key}{total.get(key) / 100}{index === keys.length - 1 ? "" : "+"}</p>
            )}
            </h3>
            <table className={styles.expensesTable}>
                <thead>
                    <tr>
                        <th>Date <button onClick={toggleFilterDate}>t</button></th>
                        <th>Expense</th>
                        <th>Amount Spent <button onClick={toggleFilterAmount}>t</button></th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.map((expense) =>
                        <ExpenseTile {...expense} key={expense.id} />
                    )}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);
