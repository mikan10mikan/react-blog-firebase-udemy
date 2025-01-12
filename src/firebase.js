import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhIEQ3iEpBG_h1L9cMWVDzExk3cFSskxI",
    authDomain: "blog-6ac94.firebaseapp.com",
    projectId: "blog-6ac94",
    storageBucket: "blog-6ac94.firebasestorage.app",
    messagingSenderId: "105602341171",
    appId: "1:105602341171:web:9277ccbb3730a0c42f8646"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };