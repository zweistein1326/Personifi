import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../components/dashboard'
import AddExpenditure from '../components/AddExpenditure';
// import InputBudget from '../components/inputBudget';
import NotFoundPage from '../components/404';
import Header from '../components/Header';
import EditExpensePage from '../components/EditExpensePage';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact={true} path='/' component={Dashboard} />
                <Route path='/addExpense' component={AddExpenditure} />
                <Route path='/editExpense/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default AppRouter;