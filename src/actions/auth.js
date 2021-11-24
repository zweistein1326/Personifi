import db, { firebase, googleAuthProvider, auth } from '../firebase/firebase';
import { startLogoutSSOB } from './ssoLogin';

export const login = (uid, username, firstname, lastname) => ({
    type: 'LOGIN',
    uid,
    username,
    firstname,
    lastname
})

export const credentials = ({ username }) => ({
    type: 'CREDENTIALS',
    username
})

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogout = () => {
    return (dispatch) => {
        //if auth provider == firebase
        // return firebase.auth().signOut()
        dispatch(startLogoutSSOB());
    }
}