import axios from 'axios';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { startSetExpenses } from './expenses';
import { renderApp, store } from '..';
import { login } from './auth';
import { history } from '../routers/appRouter';

const jwt = require('jsonwebtoken');

export const startLoginSSOB = () => {
    console.log('starting login');
    const ssobUrl = 'http://localhost:3000/'
    // window.open(ssobUrl, '_blank');
    return async (dispatch) => {
        axios.get(ssobUrl + 'ssoLogin', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(async (response) => {
            if (response.data) {
                try {
                    const validToken = jwt.verify(response.data, 'secret', { complete: true });
                    console.log(validToken.payload);
                    if (validToken.payload) {
                        store.dispatch(login(validToken.payload))
                        store.dispatch(startSetExpenses()).then(() => {
                            renderApp();
                            history.push('/dashboard');
                        })
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
    store.dispatch(logout())
    renderApp();
    history.push('/');
}
