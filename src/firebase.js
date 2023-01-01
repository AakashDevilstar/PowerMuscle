import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCQnPUbU5DjsZ8IXE_-xpmWZ_6wyLnn93c",
    authDomain: "gymstore-f96a9.firebaseapp.com",
    projectId: "gymstore-f96a9",
    storageBucket: "gymstore-f96a9.appspot.com",
    messagingSenderId: "255548478473",
    appId: "1:255548478473:web:e90d2714e918381fda14d8"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);