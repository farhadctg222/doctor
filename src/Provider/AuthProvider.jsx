import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';


export const AuthContex = createContext()
const Auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading,setloading] = useState(true)
 const creatuser = (email,password)=>{
    setloading(true)
   
    return createUserWithEmailAndPassword(Auth,email,password)
 }
 const signIn = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(Auth,email,password)
 } 
 useEffect(()=>{
   
   const unsubscribe =  onAuthStateChanged(Auth,(user)=>{
        setuser(user)
        console.log('cureent user',user)
        setloading(false)
    })
    return ()=>{
        unsubscribe()
    }
 },[])
 const logout = ()=>{
  return signOut(Auth)
 }
 


    const getinfo = {
         user,
         loading,
         creatuser,
         signIn,
         logout
    }
    return (
        <AuthContex.Provider value={getinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;