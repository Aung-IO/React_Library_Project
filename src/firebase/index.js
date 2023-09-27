// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZeDOSRPGCWzokYQyz6joqk0AcW00tp7I",
  authDomain: "react-library-6f20d.firebaseapp.com",
  projectId: "react-library-6f20d",
  storageBucket: "react-library-6f20d.appspot.com",
  messagingSenderId: "1040451652596",
  appId: "1:1040451652596:web:2664d12f0ada42aea787a1",
  measurementId: "G-2NZV636BD4",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export { db };
