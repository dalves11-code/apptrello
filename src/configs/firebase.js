import * as firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDBLoK6yQaDcaqpoOmXryo7IvNo2cyAxpw",
  authDomain: "trello-f86f6.firebaseapp.com",
  databaseURL: "https://trello-f86f6.firebaseio.com",
  projectId: "trello-f86f6",
  storageBucket: "trello-f86f6.appspot.com",
  messagingSenderId: "782308608234",
  appId: "1:782308608234:web:6262eefc775282deaaef93",
  measurementId: "G-E3WD8SQ6K7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export const database = firebase.firestore();