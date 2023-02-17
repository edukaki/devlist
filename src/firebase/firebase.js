import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjQnHBXlr6vdNnMk_yycZJd-UHSqVDyo8',
  authDomain: 'devlist-c9a0d.firebaseapp.com',
  projectId: 'devlist-c9a0d',
  storageBucket: 'devlist-c9a0d.appspot.com',
  messagingSenderId: '641223698389',
  appId: '1:641223698389:web:d1e5641bd03de537427f5c',
  measurementId: 'G-YCP8J5E9XL',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
