import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import styles from './expenseForm.module.css'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.expense ? props.expense.title : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            date: props.expense ? moment(props.expense.date) : moment(),
            focused: false,
            error: ''
        }
    }


    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^(\d{1,}(\.\d{0,2})?[-+*/]?){1,}$/)) {
            this.setState(() => ({ amount }))
        }
        // this.setState(() => ({ amount }))
    }
    onDateChange = (date) => {
        if (date) { this.setState(() => ({ date })) }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.amount) {
            // set error state = 'please provide description and amount'
            this.setState({ error: 'Please provide description and amount' })
        }
        else {
            //clear error
            this.setState({ error: '' })
            this.props.onSubmit({
                title: this.state.title,
                amount: parseFloat(this.state.amount, 10) * 100,
                date: this.state.date.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div id={styles.expenseForm}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus={true}
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        className={styles.input} />
                    <br />
                    <input
                        type="text"
                        placeholder="Amount"
                        autoFocus={true}
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        className={styles.input} />
                    <br />
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <br />
                    <textarea placeholder="Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        className={styles.note}
                    ></textarea>
                    <br />
                    <button className={styles.submitButton}>Confirm Expense</button>
                </form>
                {this.state.error ? <p>{this.state.error}</p> : null}
            </div >
        )
    }
}
