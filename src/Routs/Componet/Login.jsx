import React, { useContext, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const [token,settoken] = useState([])

  const {signIn}= useContext(AuthContex)
 const handleLogin = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    signIn(email,password)
    .then(res=>{
      const logInuser = res.user;
      const emailUser = {email,password}

      axios.post('https://doctor-hazel-rho.vercel.app/jwt',emailUser,{
        withCredentials: true
      })
      
      .then(res=>{
        console.log(res.data)
        if(res.data.success){
          navigate(location?.state ? location?.state : '/')
        }
      
      })
      .catch(error=>console.log(error))
    })
 }

  

    
   

        // fetch("https://doctor-hazel-rho.vercel.app//jwt",{
    //   method: 'POST',
    //   headers: {
    //     'content-type' : 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(res=>res.json())
    // .then(ddd=> settoken(ddd.token))
    // signIn(email,password)
    // .then(res=>{
    //   const user = res.user
 
    //  //  navigate(location?.state ? location?.state : '/')
    // })
    
 
  


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row w-1/2">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
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
        <p>are you new? <Link className='text-red-500' to='/signup'>Please SignUp</Link></p>
         <input type="submit" className='btn btn-primary' value="Login" />
        </div>
        
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;