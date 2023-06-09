import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { VerificationContext } from '../providers/AuthenticationProvider';
import HashLoader from "react-spinners/HashLoader";
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(VerificationContext);
    const location = useLocation()

    
    
    if(loading) {
        return <HashLoader className='mx-auto mt-32' color="#F15D22" />
    }
    toast("hello toast")

    if(user?.email){
        return children;
    }
    else if (!user) {
        return <Navigate to="/login" state={{from: location}}  replace/>;
    }

};

export default ProtectedRoute;