import firebase from 'firebase';


console.log(process.env.FIREBASE_PROJECT_ID);

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_KEY
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





// database.ref('Expenses').push({
//     title: 'Water Bill',
//     amount: 2600,
//     date: '',
//     note: ''
// }).then(() => {
//     console.log('Data saved')
// }).catch((e) => { console.log('Error', e) })

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }).catch((e) => { console.log('Fetching Data', e) })

// database.ref('Expenses').once('value').then((snapshot) => {
//     const expenses = []
//     const val = snapshot.val();
//     console.log(val)
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = []
//     const val = snapshot.val();
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// }, (e) => {
//     console.log('Could not fetch data', e);
// })
// setTimeout(() => { database.ref('age').set(28) }, 3500)

// setTimeout(() => { database.ref().off() }, 7000)

// setTimeout(() => { database.ref('age').set(30) }, 10500) 


