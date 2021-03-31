import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAovF448o9YH-odz15RuMGVb8aTACVNGSw",
    authDomain: "tindimal-app.firebaseapp.com",
    databaseURL: "https://tindimal-app.firebaseio.com",
    projectId: "tindimal-app",
    storageBucket: "tindimal-app.appspot.com",
    messagingSenderId: "362901804396",
    appId: "1:362901804396:web:3e9e34e9b32cfbb2050f49",
    measurementId: "G-EVFY1FVZJN"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;