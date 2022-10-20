import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: "fahim" })

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("onAuthStateChange: ", currentUser);
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, googleSignIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;