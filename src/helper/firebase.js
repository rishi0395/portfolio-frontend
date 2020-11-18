import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDf14bCVRfRqLzD_XRkhCy-gWVdRZwF-U8',
  authDomain: 'rishi-portfolio-13ecf.firebaseapp.com',
  databaseURL: 'https://rishi-portfolio-13ecf.firebaseio.com',
  projectId: 'rishi-portfolio-13ecf',
  storageBucket: 'rishi-portfolio-13ecf.appspot.com',
  messagingSenderId: '639818718755',
  appId: '1:639818718755:web:664cb090d97c3798a59b96',
  measurementId: 'G-XC5ZTL1521'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
