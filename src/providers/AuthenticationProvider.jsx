import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';


const VerificationContext = createContext()
const auth = getAuth(app);
const AuthenticationProvider = ({ children }) => {

    function registerWithEmail(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userAccountInformation = { registerWithEmail }

    return (
        <div>
            <VerificationContext.Provider value={userAccountInformation}>
                {children}
            </VerificationContext.Provider>
        </div>
    );
};

export default AuthenticationProvider;