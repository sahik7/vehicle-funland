import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const VerificationContext = createContext()


const AuthenticationProvider = ({ children }) => {

    const GoogleProvider = new GoogleAuthProvider();

    function registerWithEmail(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function loginGoogle() {
        return signInWithPopup(auth, GoogleProvider);
    }

    const userAccountInformation = { registerWithEmail, loginGoogle }

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