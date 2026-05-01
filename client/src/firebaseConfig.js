import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace with your actual Firebase project configuration once you have it
const firebaseConfig = {
  apiKey: "SIMULATED_API_KEY",
  authDomain: "autoflow-simulated.firebaseapp.com",
  projectId: "autoflow-simulated",
  storageBucket: "autoflow-simulated.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export default app;
