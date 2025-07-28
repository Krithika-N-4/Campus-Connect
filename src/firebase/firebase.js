import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your own Firebase project's configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VqgGstJk-9KuTyDc8Br5Hjbtz_LadqE",
  authDomain: "campus-buddy-f672f.firebaseapp.com",
  projectId: "campus-buddy-f672f",
  storageBucket: "campus-buddy-f672f.firebasestorage.app",
  messagingSenderId: "398206453077",
  appId: "1:398206453077:web:806e2a8be56a9bbfad1bdc"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
