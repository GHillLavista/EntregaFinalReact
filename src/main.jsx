import { createRoot } from 'react-dom/client'
import React from "react";
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./contexts/ItemContexts";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwyYLUdAHt53BtdxGk1--eBbI7AhXPq5Q",
  authDomain: "pfinalitems.firebaseapp.com",
  projectId: "pfinalitems",
  storageBucket: "pfinalitems.firebasestorage.app",
  messagingSenderId: "559865715470",
  appId: "1:559865715470:web:4b2dc70c9812562730955f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)

