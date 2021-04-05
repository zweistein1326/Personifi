import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (<header>
    <NavLink to='/' activeClassName='is-active'>Home</NavLink>
    <NavLink to='/addExpense' activeClassName='is-active'>Add Expense</NavLink>
    {/* <NavLink to='/editExpense' activeClassName='is-active'>Add Expense</NavLink> */}
</header>)
export default Header;