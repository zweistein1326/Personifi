import firebase from 'firebase';
import React from 'react';
import { v4 as uuid } from 'uuid'

var firebaseConfig = {
    apiKey: "AIzaSyBIUW4LS63yOoAF_2ZnwfWZ0elZQm94DsE",
    authDomain: "financialcontrol-d8deb.firebaseapp.com",
    projectId: "financialcontrol-d8deb",
    storageBucket: "financialcontrol-d8deb.appspot.com",
    messagingSenderId: "836595732873",
    appId: "1:836595732873:web:b49fac44ccb6db90d4d158",
    measurementId: "G-F3CCBH56VZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();


export const addExpense = ({ title = '', amount = 0, date = '' }) => ({
    type: 'ADD_EXPENSE',
    expense: { id: uuid(), title, amount, date }
})

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}