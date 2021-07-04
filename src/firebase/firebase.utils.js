import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBrEDOBQ3ANea9hfila7wya5BCSKcNQDVw",
        authDomain: "bagmati-db.firebaseapp.com",
        projectId: "bagmati-db",
        storageBucket: "bagmati-db.appspot.com",
        messagingSenderId: "370435398992",
        appId: "1:370435398992:web:44b92fdb0e2095d99c2055",
        measurementId: "G-YMR9RJF5J1"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider= new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;