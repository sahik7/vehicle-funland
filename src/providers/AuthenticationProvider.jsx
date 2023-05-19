import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const VerificationContext = createContext()


const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    // Providers
    const GoogleProvider = new GoogleAuthProvider();


    // Register Function
    function EmailPasswordRegister(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login Email
    const EmailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Login Google
    function loginGoogle() {
        return signInWithPopup(auth, GoogleProvider);
    }


    // Set Name and Image Link
    const setImageLinkAndName = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }


    // User Authentication State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signInUser) => {
            if (signInUser) {
                setUser(signInUser);

            } else {
            }
        });
        unsubscribe()
    }, [])



    // logout
    const logout = () => {
        signOut(auth)
    }

    const userAccountInformation = { user, loginGoogle, EmailPasswordLogin, EmailPasswordRegister, setImageLinkAndName, logout }

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