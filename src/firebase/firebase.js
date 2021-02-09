import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export { firebase, database as default };
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').once('value')
// //     .then((snapshot)=>{
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot)=>{
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })

// // database.ref('expenses').on('value', (snapshot)=>{
// //     const expenses = [];
// //         snapshot.forEach((childSnapshot)=>{
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// // }, (e)=>{
// //     console.log('error', e)
// // })


// database.ref('expenses').push({
//     description:"new car",
//     note: "bmw",
//     amount: 10000,
//     createdAt: "jan 1st 1970"
// })


// // database.ref('notes/-MT5FNL0yVdNNOgkgl3c').remove();

// // database.ref('notes').push({
// //     title: "course topics",
// //     note: "python"
// // });


// // database.ref().on('value', (snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // }, (e)=>{
// //     console.log('error', e)
// // })
 
// // database.ref('name').set('Mike')



// // database.ref('location/city').once('value')
// //   .then((snapshot)=>{
// //       console.log(snapshot.val())
// //   }).catch((e)=>{
// //       console.log('error is: ', error)
// //   })

// // database.ref().set({
// //     name: "Tamar Moshe", 
// //     age: 31,
// //     job: {
// //             title: 'software developer',
// //             company: "google"
// //         },
// //     stress: 6,
// //     isSingle: false,
// //     location: {
// //         city: "Hod Hasharon",
// //         country: "Israel"
// //     }
// // }).then(()=>{
// //     console.log('data is saved')
// // }).catch((error)=>{
// //     console.log('this failed', error)
// // })

// // database.ref().update({
// //     stress: 9,
// //     'job/company': 'Amazon',
// //     'location/city': "Seattle"
// // })

// // database.ref().remove().then(()=>{
// //     console.log('data is removed')
// // }).catch((error)=>{
// //     console.log('this failed removing', error)
// // })
