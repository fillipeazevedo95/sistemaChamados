import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD80C7DWtZ3zDRb9UG161VAW7nKko9887s",
    authDomain: "tickets-9aee0.firebaseapp.com",
    projectId: "tickets-9aee0",
    storageBucket: "tickets-9aee0.appspot.com",
    messagingSenderId: "92940976756",
    appId: "1:92940976756:web:0f3d86b971720cbcf38721",
    measurementId: "G-0Z2NQXYNC5"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }