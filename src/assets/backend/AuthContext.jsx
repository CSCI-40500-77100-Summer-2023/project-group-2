import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// Create a context
const UserContext = createContext();

// Create a provider
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    // Create a function for the user to sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Create a function for the user to sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Create a function for the user to sign out
    const logout = () => {
        return signOut(auth);
    }
    // Create a function to check if the user is logged in
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubcribe();
        }
    }, [])
    // Return the provider
    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}