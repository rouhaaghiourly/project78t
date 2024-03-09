import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyCXYtP0Im_qHpWn3AJP7T3-bNSiKztWRPw",
    authDomain: "bikes-10174.firebaseapp.com",
    projectId: "bikes-10174",
    storageBucket: "bikes-10174.appspot.com",
    messagingSenderId: "712526927321",
    appId: "1:712526927321:web:71c908ab36960f4e1035c8"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


