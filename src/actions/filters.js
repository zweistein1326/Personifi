export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
export const searchByText = (searchQuery = '') => ({
    type: 'SEARCH_BY_TEXT',
    text: searchQuery
})