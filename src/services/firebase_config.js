import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-XXXXXXXXXX",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://demo.firebaseio.com"
};

// Initialize Firebase
let app, auth, db;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getDatabase(app);
} catch (error) {
    console.error("Firebase initialization error:", error);
    // Provide fallback values
    app = null;
    auth = null;
    db = null;
}

export { app, auth, db };
