
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
       apiKey: "AIzaSyB3flzlU-GTOaJv5hva8BNt1Zql-65eoIg",
       authDomain: "todo-app-cp-2b5fc.firebaseapp.com",
       databaseURL: "https://todo-app-cp-2b5fc.firebaseio.com",
       projectId: "todo-app-cp-2b5fc",
       storageBucket: "todo-app-cp-2b5fc.appspot.com",
       messagingSenderId: "684193227806",
       appId: "1:684193227806:web:5c9dd98d7d3e54de86ba0f",
       measurementId: "G-M5PF7D2LP4"
});

const db = firebaseApp.firestore();


export default db; // tp have excess to db
