import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC1vJZW1lmpcMpdHkREXy20cBwX0jTGOhU',
  authDomain: 'crwn-db-bba24.firebaseapp.com',
  projectId: 'crwn-db-bba24',
  storageBucket: 'crwn-db-bba24.appspot.com',
  messagingSenderId: '700991983726',
  appId: '1:700991983726:web:a2dfb9189b8e536859167f',
  measurementId: 'G-KZT6DF4NCH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
