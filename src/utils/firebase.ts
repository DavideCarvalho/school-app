import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDHPP1yRYw_lqMj_z1xBGBGZr6z8018mkE',
  authDomain: 'school-app-fadf9.firebaseapp.com',
  databaseURL: 'https://school-app-fadf9.firebaseio.com',
  projectId: 'school-app-fadf9',
  storageBucket: 'school-app-fadf9.appspot.com',
  messagingSenderId: '737176895182',
  appId: '1:737176895182:web:e0b61bf6b8819784a5da9f',
  measurementId: 'G-7ND9Y9SETT',
});

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const analytics = firebaseApp.analytics();
export const firestore = firebaseApp.firestore();
