import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD40Qi7rpsvjtln9XRcWF1yHBYeCCNUaJ8",
    authDomain: "janchase-clothing.firebaseapp.com",
    databaseURL: "https://janchase-clothing.firebaseio.com",
    projectId: "janchase-clothing",
    storageBucket: "janchase-clothing.appspot.com",
    messagingSenderId: "158001252499",
    appId: "1:158001252499:web:bc86e1fc3ac4ec6f3d6566",
    measurementId: "G-2NERZE9X56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
