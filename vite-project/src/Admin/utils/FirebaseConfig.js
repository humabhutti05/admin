import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAfG7w-guAUSVA0NYatjKH2s3QGJBl8crk",
  authDomain: "first-api-de04b.firebaseapp.com",
  projectId: "first-api-de04b",
  storageBucket: "first-api-de04b.appspot.com",
  messagingSenderId: "670839565586",
  appId: "1:670839565586:web:adecde7299c18d746a97cb"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)