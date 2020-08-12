import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfRU--tlRSQOV5FjuQHGWHsoIKv_GaNYU",
  authDomain: "my-instagram-react-clone.firebaseapp.com",
  databaseURL: "https://my-instagram-react-clone.firebaseio.com",
  projectId: "my-instagram-react-clone",
  storageBucket: "my-instagram-react-clone.appspot.com",
  messagingSenderId: "689319077843",
  appId: "1:689319077843:web:062c48787b614f8966f126",
  measurementId: "G-ZXL3YMGNGY",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
