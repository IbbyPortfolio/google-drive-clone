import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
   apiKey: 'AIzaSyCVJcD_2dtvnGq_oX1kZF9DT-bbnp180oc',
   authDomain: 'react-redux--firebase-auth.firebaseapp.com',
   projectId: 'react-redux--firebase-auth',
   storageBucket: 'react-redux--firebase-auth.appspot.com',
   messagingSenderId: '780093943763',
   appId: '1:780093943763:web:f135a4141a760203eb4926',
});

const firestore = app.firestore();

export const database = {
   folders: firestore.collection('folder'),
   files: firestore.collection('file'),
   formatDoc: (doc) => {
      return {
         id: doc.id,
         ...doc.data(),
      };
   },
   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = app.storage();
export const auth = app.auth();
export default app;
