import firebase from "firebase/compat/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCAS2p2BXgS7rao27agg0xHXFnxKs-GDAQ",
  authDomain: "smart-books-ee169.firebaseapp.com",
  databaseURL: "https://smart-books-ee169-default-rtdb.firebaseio.com",
  projectId: "smart-books-ee169",
  storageBucket: "smart-books-ee169.appspot.com",
  messagingSenderId: "532962794891",
  appId: "1:532962794891:web:c6484c37734c283dae638e",
  measurementId: "G-G6N48PZNEY"
};
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}
const db = getDatabase()
export {db}