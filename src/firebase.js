import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    
    apiKey: process.env.REACT_APP_KEY_API,
    authDomain: process.env.REACT_APP_KEY_AUTH,
    projectId: "first-app-43d47",
    storageBucket: "first-app-43d47.appspot.com",
    messagingSenderId: "520045983911",
    appId: process.env.REACT_APP_KEY_APPID
  });
  // Initialize Firebase
 

  var db = firebaseApp.firestore();
  export {db};
