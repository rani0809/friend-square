import firebase from "./firebase"


const firebaseConfig = {
    apiKey: "AIzaSyB1CYVQAid4D6Lthc2N1A7G9i2oyrZO3Hc",
    authDomain: "friend-square.firebaseapp.com",
    projectId: "friend-square",
    storageBucket: "friend-square.appspot.com",
    messagingSenderId: "160318128855",
    appId: "1:160318128855:web:42b13c2c6396703fcb6692",
    measurementId: "G-GMSYLZS3VL"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;