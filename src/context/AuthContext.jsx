import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../services/firebase_config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!auth) {
            console.warn("Firebase auth not initialized");
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const signup = async (email, password) => {
        if (!auth) {
            throw new Error("Firebase not initialized. Please add your Firebase credentials to .env file");
        }
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email, password) => {
        if (!auth) {
            throw new Error("Firebase not initialized. Please add your Firebase credentials to .env file");
        }
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        if (!auth) {
            throw new Error("Firebase not initialized");
        }
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
