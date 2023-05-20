import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { VerificationContext } from '../providers/AuthenticationProvider';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(VerificationContext);
    const location = useLocation()
    console.log(user)
    console.log(location)

    // if (loading) {
    //     return <h1>Loading</h1>
    // }

    if(user?.email){
        return children;
    }
    else if (!user) {
        return <Navigate to="/login" state={{from: location}}  replace/>;
    }

};

export default ProtectedRoute;