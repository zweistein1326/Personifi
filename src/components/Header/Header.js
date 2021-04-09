import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { startLogout } from '../../actions/auth'
import { connect } from 'react-redux';

const Header = (props) => (
    <div className={styles.heading}>
        <h1 className={styles.title}>Personifi</h1>
        <header className={styles.navbar}>
            {/* <NavLink to='/' exact activeClassName={styles.isActive} className={styles.navLink}>Home</NavLink> */}
            <NavLink to='/dashboard' exact activeClassName={styles.isActive} className={styles.navLink}>Dashboard</NavLink>
            <NavLink to='/addExpense' activeClassName={styles.isActive} className={styles.navLink}>Add Expense</NavLink>
            {/* <NavLink to='/editExpense' activeClassName='is-active'>Add Expense</NavLink> */}
            <button onClick={props.startLogout}>Logout</button>
        </header>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(Header);