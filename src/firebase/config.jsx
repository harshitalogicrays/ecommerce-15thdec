import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APIKEY }`,
  authDomain: `${import.meta.env.VITE_AUTHDOMAIN}`,
  projectId: `${import.meta.env.VITE_PROJECTID}`,
  storageBucket:`${import.meta.env.VITE_STORAGEBUCKE}`,
  messagingSenderId:`${import.meta.env.VITE_MESSAGINGSENDERID}`,
  appId:VITE_APPID
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)

export default app