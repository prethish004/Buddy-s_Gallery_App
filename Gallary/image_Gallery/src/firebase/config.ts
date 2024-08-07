// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdKgBNds_UmwYXizyZvXnInym_qCte8lg",
  authDomain: "image-gllary-buddys.firebaseapp.com",
  projectId: "image-gllary-buddys",
  storageBucket: "image-gllary-buddys.appspot.com",
  messagingSenderId: "352431001332",
  appId: "1:352431001332:web:b9f452a289e03bb87ed8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const storage = getStorage(app)
const db = getFirestore(app)
export{auth,storage,db};