import firebase from "firebase/app";
import "firebase/database";

// const config = {
//   apiKey: "AIzaSyB79QDAskfJ-kUoJoZciXyOYyvFepnwQNg",
//   authDomain: "blog-api-9cab7.firebaseapp.com",
//   databaseURL: "https://blog-api-9cab7.firebaseio.com",
//   projectId: "blog-api-9cab7",
//   storageBucket: "blog-api-9cab7.appspot.com",
//   messagingSenderId: "756292894736",
//   appId: "1:756292894736:web:a331b3d684d5ccfb8d0a95",
//   measurementId: "G-Z28JSNWCLM"
// };
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
