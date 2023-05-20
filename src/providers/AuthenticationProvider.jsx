import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const VerificationContext = createContext()


const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Providers
    const GoogleProvider = new GoogleAuthProvider();


    // Register Function
    function EmailPasswordRegister(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login Email
    const EmailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Login Google
    function loginGoogle() {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }


    // Set Name and Image Link
    const setImageLinkAndName = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }




    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }





    // User Authentication State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoading(false)
        });
        return () => { unsubscribe() };
    }, [])




    const userAccountInformation = { user, loginGoogle, EmailPasswordLogin, EmailPasswordRegister, setImageLinkAndName, logout, loading }

    return (
        <div>
            <VerificationContext.Provider value={userAccountInformation}>
                {children}
            </VerificationContext.Provider>
        </div>
    );
};

export { VerificationContext }
export default AuthenticationProvider;