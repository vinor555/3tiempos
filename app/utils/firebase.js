import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKA96Z0KaaT-ydxdt-_QJhJ0zut1JMkjg",
    authDomain: "tiempos-d6ae0.firebaseapp.com",
    projectId: "tiempos-d6ae0",
    storageBucket: "tiempos-d6ae0.appspot.com",
    messagingSenderId: "776420684263",
    appId: "1:776420684263:web:1582c82948afde017e0d42"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);