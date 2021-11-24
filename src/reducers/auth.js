export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { uid: action.uid, username: action.username, firstname: action.firstname, lastname: action.lastname }
        // case 'CREDENTIALS':
        //     return { username: action.username }
        case 'LOGOUT':
            return {}
        default: return state;
    }
}