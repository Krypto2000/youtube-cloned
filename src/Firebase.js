
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-DcfoXWV_YOLVKAa2XIsENzWOBY4Dexc",
    authDomain: "clone-7-175d5.firebaseapp.com",
    projectId: "clone-7-175d5",
    storageBucket: "clone-7-175d5.appspot.com",
    messagingSenderId: "923649589110",
    appId: "1:923649589110:web:5beb3edcae1344dcb20457"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
