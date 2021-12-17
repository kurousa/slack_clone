import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, //"AIzaSyAvac0s2GBmPnuwxbmsu567pnJc0iA7XYo",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, //"slack-clone-c8c10.firebaseapp.com",
    projectId: process.env.REACT_APP_AUTH_PROJECTID, //"slack-clone-c8c10",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, //"slack-clone-c8c10.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, //"912987623678",
    appId: process.env.REACT_APP_APP_ID,// "1:912987623678:web:8e5ce1c0720eaa75af55af"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }; 