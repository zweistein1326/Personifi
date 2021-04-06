import React from 'react';
import AddExpenditure from './AddExpenditure';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import InputBudget from './inputBudget';

function Dashboard() {
    return (
        <div>
            <InputBudget />
            {/* <h3>Monthly expenditure</h3>
            <h2>01.04.2021</h2> */}
            <ExpenseListFilters />
            {/* <AddExpenditure /> */}
            <ExpenseList />
        </div>

    );
}
export default Dashboard