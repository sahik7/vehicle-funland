import React, { createContext } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const VerificationContext = createContext()


const AuthenticationProvider = ({ children }) => {

    // Providers
    const GoogleProvider = new GoogleAuthProvider();


    // Register Function
    function registerWithEmail(email, password) {
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

    const userAccountInformation = { registerWithEmail, loginGoogle, EmailPasswordLogin }

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