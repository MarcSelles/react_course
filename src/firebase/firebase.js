import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }; 
   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

/* Practice */

// // Child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // Child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }) 

// database.ref('expenses')
//   .on('value', 
//   (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//   }, (e) => {
//     console.log('Error with logging ', e)
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: "September Rent",
//   amount: 6800,
//   createdAt:0
// });





// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with logging ', e)
// });

// database.ref().set({
//   name:'Marc Selles',
//   age:25,
//   isSingle:false,
//   location: {
//     city:'Amsterdam',
//     country:'The Netherlands'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('this failed ', error);
// });

// database.ref().update({
//   name: 'Marc',
//   age: 26,
//   isSingle:null,
//   job:'None',
//   'location/city': 'Velserbroek'
// });

// database.ref().remove()
//   .then(() => {
//     console.log('Remove succeeded');
//   }).catch((error) => {
//     console.log('Remove failed ', error);
//   })