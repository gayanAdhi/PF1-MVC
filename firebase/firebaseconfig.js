import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyB__EXM03hNXDolbiKOOO8pp-oQezDofOs",
  authDomain: "chatapp24-7e8af.firebaseapp.com",
  projectId: "chatapp24-7e8af",
  storageBucket: "chatapp24-7e8af.appspot.com",
  messagingSenderId: "564651154366",
  appId: "1:564651154366:web:8c1b35942351459b3777ef"
};


export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);