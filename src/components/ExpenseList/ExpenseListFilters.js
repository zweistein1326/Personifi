import React from 'react';
import { connect } from 'react-redux';
import { searchByText, sortByAmount, sortByDate } from '../../actions/filters';
import styles from './expenseListFilters.module.css';

const ExpenseListFilters = (props) => (
    <div id={styles.filters}>
        <input type="text"
            value={props.filters.text}
            placeholder="search by title"
            className={styles.searchInput}
            onChange={(e) => {
                props.dispatch(searchByText(e.target.value));
            }} />
        <select value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                }
                else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>

    </div >
);

const mapStateToProps = (state) => (
    { filters: state.filters }
)

export default connect(mapStateToProps)(ExpenseListFilters);
