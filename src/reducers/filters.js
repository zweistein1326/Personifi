const filterReducerDefaultState = { sortBy: '', text: '', startDate: null, endDate: null }

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
        case 'SEARCH_BY_DATE':
            return {
                ...state,
                startDate: action.startDate,
                endDate: action.endDate
            }
        default: return state
    }
}