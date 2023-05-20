import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { VerificationContext } from '../providers/AuthenticationProvider';
import HashLoader from "react-spinners/HashLoader";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(VerificationContext);
    const location = useLocation()
    console.log(user)
    console.log(location)

    if(loading) {
        return <HashLoader className='mx-auto mt-32' color="#F15D22" />
    }

    if(user?.email){
        return children;
    }
    else if (!user) {
        return <Navigate to="/login" state={{from: location}}  replace/>;
    }

};

export default ProtectedRoute;