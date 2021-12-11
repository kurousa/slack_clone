import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvac0s2GBmPnuwxbmsu567pnJc0iA7XYo",
    authDomain: "slack-clone-c8c10.firebaseapp.com",
    projectId: "slack-clone-c8c10",
    storageBucket: "slack-clone-c8c10.appspot.com",
    messagingSenderId: "912987623678",
    appId: "1:912987623678:web:8e5ce1c0720eaa75af55af"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }; 