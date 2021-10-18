import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// this is executed when this file is imported
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
/*const firebaseConfig = {
    apiKey: "AIzaSyBYC2-qQ-fXAaRV-G4lPyvv59WC68f6pYg",
    authDomain: "dynamic-menucard.firebaseapp.com",
    projectId: "dynamic-menucard"
};*/
console.log({firebaseConfig});

// if already initialized, use that one
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
export const firestoreDatabase = firebaseConfig.projectId && firebase.firestore();
if (firestoreDatabase)
    console.log(`connection to database is ok`);
else
    console.log(`ERROR: no connection to database`);