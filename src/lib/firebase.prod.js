import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAIfikU-GmiYPbaD-eZZaNrbIbVYAymK1M",
  authDomain: "watchdawgs-25d5a.firebaseapp.com",
  projectId: "watchdawgs-25d5a",
  storageBucket: "watchdawgs-25d5a.appspot.com",
  messagingSenderId: "526427587818",
  appId: "1:526427587818:web:4c3dfaa2678511ba3b0393",
  measurementId: "G-KVB7Z0SV8Q"
};


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
// Initialize Firebase
// const app = initializeApp(config);
// const analytics = getAnalytics(app);


// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';


// const config = {
//   apiKey: 'AIzaSyCev-C6AKuyxD8oXcGwuAyyGmWpo7INl3U',
//   authDomain: 'netflix-test01.firebaseapp.com',
//   databaseURL: 'https://netflix-test01.firebaseio.com',
//   projectId: 'netflix-test01',
//   storageBucket: 'netflix-test01.appspot.com',
//   messagingSenderId: '541152959854',
//   appId: '1:541152959854:web:38145f65984eef0cd3757f',
// };

// const config = {
//   apiKey: 'AIzaSyCev-C6AKuyxD8oXcGwuAyyGmWpo7INl3U',
//   authDomain: 'netflix-test01.firebaseapp.com',
//   databaseURL: 'https://netflix-test01.firebaseio.com',
//   projectId: 'netflix-test01',
//   storageBucket: 'netflix-test01.appspot.com',
//   messagingSenderId: '541152959854',
//   appId: '1:541152959854:web:38145f65984eef0cd3757f',
// };

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
