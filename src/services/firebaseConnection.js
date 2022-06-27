import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyAKDkw7T3uVFQtJ_bSkArSJptv6y52Knuw",
    authDomain: "projetodpu-a5612.firebaseapp.com",
    projectId: "projetodpu-a5612",
    storageBucket: "projetodpu-a5612.appspot.com",
    messagingSenderId: "282238844064",
    appId: "1:282238844064:web:df3b469bf6951587945dc5",
    measurementId: "G-7ZM61TWX04"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;