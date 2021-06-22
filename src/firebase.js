import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEcqfGk9gyM0oms_LGcTI4-_agqrVep9I",
  authDomain: "clone-16633.firebaseapp.com",
  projectId: "clone-16633",
  storageBucket: "clone-16633.appspot.com",
  messagingSenderId: "107099503594",
  appId: "1:107099503594:web:1d75fbb1e13aed51c4d093",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
