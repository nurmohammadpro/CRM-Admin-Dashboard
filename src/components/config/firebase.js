// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjcvhBWV8UcDsg9UO2hVOa0j1SloI32v4",
  authDomain: "crm-admin-dashboard.firebaseapp.com",
  projectId: "crm-admin-dashboard",
  storageBucket: "crm-admin-dashboard.firebasestorage.app",
  messagingSenderId: "252540771928",
  appId: "1:252540771928:web:5cb0a79e5082213e96b42d",
  measurementId: "G-0F5S83YB7Y",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
