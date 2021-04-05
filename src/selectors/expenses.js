export default (expenses, { text, sortBy }) => {
    return expenses.filter((expense) => {
        const textMatch = expense.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.value < b.value ? -1 : 1;
        }
    })
}