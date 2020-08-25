import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJDhCsAuSbSp0LGp78kSfoTXq1gZpYG_8",
    authDomain: "nicolestagram-5e1fa.firebaseapp.com",
    databaseURL: "https://nicolestagram-5e1fa.firebaseio.com",
    projectId: "nicolestagram-5e1fa",
    storageBucket: "nicolestagram-5e1fa.appspot.com",
    messagingSenderId: "930165274345",
    appId: "1:930165274345:web:04dcd845de92ffd54da278"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };