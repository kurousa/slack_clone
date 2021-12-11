import { getApps, getApp, initializeApp }from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAvac0s2GBmPnuwxbmsu567pnJc0iA7XYo",
    authDomain: "slack-clone-c8c10.firebaseapp.com",
    projectId: "slack-clone-c8c10",
    storageBucket: "slack-clone-c8c10.appspot.com",
    messagingSenderId: "912987623678",
    appId: "1:912987623678:web:8e5ce1c0720eaa75af55af"
  };

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig): getApp();

export default firebaseApp;