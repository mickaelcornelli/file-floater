import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//import { getFunctions } from 'firebase/functions';
//import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXdWQY_BqhzW18y84EQt8tYsANNj36OcE",
    authDomain: "filer-floater.firebaseapp.com",
    projectId: "filer-floater",
    storageBucket: "filer-floater.appspot.com",
    messagingSenderId: "873576589705",
    appId: "1:873576589705:web:e9fe52415581f64d385958"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

//const auth = getAuth(app)
//const functions = getFunctions(app)

export { db, storage }