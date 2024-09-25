// src/firebase.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgAIL9L4FJZlKUfXbGXfWxkcS1zLt14LI",
  authDomain: "chill-eats.firebaseapp.com",
  projectId: "chill-eats",
  storageBucket: "chill-eats.appspot.com",
  messagingSenderId: "477500632256",
  appId: "1:477500632256:web:b4992440772520f47b1125"
};

const app = initializeApp(firebaseConfig);

export default app;
