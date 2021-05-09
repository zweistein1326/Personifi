export default (expenses, { text = '', sortBy = 'date', startDate = null, endDate = null }) => {
    return expenses.filter((expense) => {
        if (expense) {
            const textMatch = expense.title.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
            var betweenDates = true;
            console.log(startDate, endDate, expense.date)
            if (!!startDate && !!endDate) {
                betweenDates = (expense.date >= startDate && expense.date <= endDate)
            }
            return textMatch && betweenDates;
        }
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? -1 : 1;
        }
    })
}