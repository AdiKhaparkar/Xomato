import {initializeApp} from 'firebase/app';
import {getFireStore} from 'firebase/fireStore';
import {getStorage} from 'firebase/storage';
import "firebase/compat/firestore"
import "firebase/compat/auth"

export const firebaseConfig = {
  apiKey: 'AIzaSyAKO-R-i_du7y9PoJGrKh97IQNFwgYdT8I',
  authDomain: 'foodappproject1-11c65.firebaseapp.com',
  projectId: 'foodappproject1-11c65',
  storageBucket: 'foodappproject1-11c65.appspot.com',
  messagingSenderId: '285973874941',
  appId: '1:285973874941:web:ffe1b2abd06be0e1725694',
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const storage = getStorage(app);

export {storage, db};
