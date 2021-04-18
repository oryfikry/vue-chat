import firebase from "firebase/app";
import "firebase/database";

const  config = {
    // API KEY
    apiKey: "AIzaSyCy5MKIhbq-punfLumuU3MuqSRLkuefn3c",
    authDomain: "vue-chat-6e6fd.firebaseapp.com",
    projectId: "vue-chat-6e6fd",
    storageBucket: "vue-chat-6e6fd.appspot.com",
    messagingSenderId: "63015244740",
    appId: "1:63015244740:web:1c38350d10b274c7c10a91"
} 

const db = firebase.initializeApp(config);
export default db;