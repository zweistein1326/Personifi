import axios from 'axios';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { startSetExpenses } from './expenses';
import { renderApp, store } from '..';
import { credentials, login, logout } from './auth';
import { history } from '../routers/appRouter';

const jwt = require('jsonwebtoken');

export const startLoginSSOB = () => {
    console.log('starting login');
    const credentialsRequired = ['username', 'dob', 'firstname', 'lastname'];
    const ssobUrl = 'http://localhost:3000/'
    // window.open(ssobUrl, '_blank');
    return async (dispatch) => {
        // send params with get request
        axios.get(ssobUrl + 'ssoLogin', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(async (response) => {
            if (response.data) {
                try {
                    const token = response.data['sessionToken'];
                    const userCredentials = response.data['credentials'];
                    // console.log(userCredentials.username);
                    const validToken = jwt.verify(token, 'secret', { complete: true });
                    if (validToken.payload) {
                        store.dispatch(login(validToken.payload, userCredentials['username'], userCredentials['firstname'], userCredentials['lastname']));
                        // console.log('setting credentials');
                        // store.dispatch(credentials(userCredentials))
                        store.dispatch(startSetExpenses()).then(() => {
                            renderApp();
                            history.push('/dashboard');
                        })
                        alert(`this app is asking for the following details: ${credentialsRequired.map((cred) => { return cred })}`);
                    }
                    else {
                        window.open(ssobUrl, '_blank');
                        // wait for sso service to respond
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
}

export const startLogoutSSOB = () => {
    // switch off connection to SSO and next time will redirect to Login page
    store.dispatch(logout())
    renderApp();
    history.push('/');
}
