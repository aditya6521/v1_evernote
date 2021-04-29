import firebase from "firebase";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyCsU9rhUAfSZUhQjXsB9yn7PyrFbYOOag8",
    authDomain: "v1evernote.firebaseapp.com",
    projectId: "v1evernote",
    storageBucket: "v1evernote.appspot.com",
    messagingSenderId: "563630015355",
    appId: "1:563630015355:web:d13a32cd77eb3a163773de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dbFirestore=firebase.firestore();

  export {dbFirestore};