import React, { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { user,creatuser,loading } = useContext(AuthContex)
   
    const navigate = useNavigate()

  const handleSignup = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)
      creatuser(email,password)
      .then(userCredential=>{
        const user = userCredential.user;
         console.log(user.email)
          if(user){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your Account Create",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
       
      
     

     
 }
 
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row w-1/2">
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup}   className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input type="submit" className='btn btn-primary' value="SignUp" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;