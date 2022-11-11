import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLCD44NFzJlK2ttNVrfpbPimEcWz1UYMM',
  authDomain: 'careers-fa01f.firebaseapp.com',
  projectId: 'careers-fa01f',
  storageBucket: 'careers-fa01f.appspot.com',
  messagingSenderId: '551991591458',
  appId: '1:551991591458:web:2a6b0d0b1985cda017807b',
  measurementId: 'G-ZVJ3NWE1ZN',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
