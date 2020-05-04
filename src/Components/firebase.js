// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDRFzWvnZt8Xyet3LYIdEtkJ-MI2mXHTsw",
    authDomain: "project-five-7d718.firebaseapp.com",
    databaseURL: "https://project-five-7d718.firebaseio.com",
    projectId: "project-five-7d718",
    storageBucket: "project-five-7d718.appspot.com",
    messagingSenderId: "167738762781",
    appId: "1:167738762781:web:e43bcfd388626767ed08f4"
};


firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;