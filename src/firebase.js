
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4R4YudQGIVDzAHes1gVbtfYRmAvThCw4",
  authDomain: "hotstar-clone-64b87.firebaseapp.com",
  projectId: "hotstar-clone-64b87",
  storageBucket: "hotstar-clone-64b87.appspot.com",
  messagingSenderId: "924424867543",
  appId: "1:924424867543:web:f6ecce6804c71d2c032a92"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
const storage = getStorage(app);
export { auth, provider, storage};
export default db;
