import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => (
    <div className={styles.heading}>
        <h1 className={styles.title}>Personifi</h1>
        <header className={styles.navbar}>
            <NavLink to='/' exact activeClassName={styles.isActive} className={styles.navLink}>Home</NavLink>
            <NavLink to='/addExpense' activeClassName={styles.isActive} className={styles.navLink}>Add Expense</NavLink>
            {/* <NavLink to='/editExpense' activeClassName='is-active'>Add Expense</NavLink> */}
        </header>
    </div>
)

export default Header;