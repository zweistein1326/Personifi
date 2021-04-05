const filterReducerDefaultState = { sortBy: '' }

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SEARCH_BY_TEXT':
            return {
                ...state,
                text: action.text
            }
        default: return state
    }
}