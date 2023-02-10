import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAv64YOAzePW6PzgzV-QVlkGFixESR6T44',
  authDomain: 'chat-gpt-e0e26.firebaseapp.com',
  projectId: 'chat-gpt-e0e26',
  storageBucket: 'chat-gpt-e0e26.appspot.com',
  messagingSenderId: '813294790659',
  appId: '1:813294790659:web:bee7e2933ee857574a0636',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
