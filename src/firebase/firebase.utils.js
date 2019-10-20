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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export default firebase;
