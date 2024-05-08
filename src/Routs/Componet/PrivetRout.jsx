import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContex)
   if(loading){
    return <progress className="progress w-56"></progress>
   }
    if(user?.email){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRout;