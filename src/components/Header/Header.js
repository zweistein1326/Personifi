import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { startLogout } from '../../actions/auth'
import { connect } from 'react-redux';
import auth from '../../reducers/auth';

const Header = (state, props) => (
    <div className={styles.heading}>
        <h2 className={styles.title}>Personifi</h2>
        <h2 className={styles.title}>Hi {state.auth.username ? `${state.auth.firstname} ${state.auth.lastname}` : 'Anon'}</h2>
        <header className={styles.navbar}>
            {/* <NavLink to='/' exact activeClassName={styles.isActive} className={styles.navLink}>Home</NavLink> */}
            {/* <NavLink to='/home' exact activeClassName={styles.isActive} className={styles.navLink}>Dashboard</NavLink> */}
            <NavLink to='/dashboard' exact activeClassName={styles.isActive} className={styles.navLink}>Expenses</NavLink>
            <NavLink to='/addExpense' activeClassName={styles.isActive} className={styles.navLink}>Add Expense</NavLink>
            {/* <NavLink to='/editExpense' activeClassName='is-active'>Add Expense</NavLink> */}
            <button className={styles.logoutButton} onClick={props.startLogout}>Logout</button>
        </header>
    </div>
)

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);