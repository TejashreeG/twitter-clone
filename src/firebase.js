import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAStk3EuGD8iYmKJNq63Wig_bZYUCMydhc",
    authDomain: "twitter-clone-64511.firebaseapp.com",
    projectId: "twitter-clone-64511",
    storageBucket: "twitter-clone-64511.appspot.com",
    messagingSenderId: "338195657175",
    appId: "1:338195657175:web:bf02fcc8a0dcfff947db92",
    measurementId: "G-8R75EQKBRW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;