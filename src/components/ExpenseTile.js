import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'

function ExpenseTile({ date, title, amount, id }) {
    console.log(id)
    return (<div key={id}>
        <Link to={`/editExpense/${id}`}><h3>{title}</h3></Link>
        HKD {`${amount / 100}`} {"     "}
        {moment(date).format('MMMM Do YYYY')}{"     "}
    </div >)
}

export default ExpenseTile;