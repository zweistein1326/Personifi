import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//     authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//     projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//     storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//     messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//     appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
//     measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_KEY}`,
//     databaseUrl: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`
// };

const firebaseConfig = {
    apiKey: "AIzaSyBIUW4LS63yOoAF_2ZnwfWZ0elZQm94DsE",
    authDomain: "financialcontrol-d8deb.firebaseapp.com",
    databaseURL: "https://financialcontrol-d8deb-default-rtdb.firebaseio.com",
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


