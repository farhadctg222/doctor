import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation()
    console.log(location)
   if(loading){
    return <progress className="progress w-56"></progress>
   }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivetRout;