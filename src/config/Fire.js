import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDs08z8ofNAHGrs2zLnRT_q-kO7Cr_xLJA",
    authDomain: "huongz.firebaseapp.com",
    databaseURL: "https://huongz.firebaseio.com",
    projectId: "huongz",
    storageBucket: "huongz.appspot.com",
    messagingSenderId: "883002591598",
    appId: "1:883002591598:web:7b9143b9509c749293d97f",
    measurementId: "G-HTF3MYD4CK"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;