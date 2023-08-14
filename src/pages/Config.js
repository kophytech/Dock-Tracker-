// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQexc523SBXnr3vVyapQPXK1o3HPg4Li8',
  authDomain: 'docktrailizer.firebaseapp.com',
  projectId: 'docktrailizer',
  storageBucket: 'docktrailizer.appspot.com',
  messagingSenderId: '74846836591',
  appId: '1:74846836591:web:c172f938429e1843bb3a9a',
  measurementId: 'G-QS1DFH76CR',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = firebase.firestore().collection('cmc');

const auth = firebase.auth();

export {auth, db, firebase};
