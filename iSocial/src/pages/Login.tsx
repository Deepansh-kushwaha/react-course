import React from 'react'
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
    const provider = new GoogleAuthProvider();

    
  return (
    <div className='text-center'>
     <h1 className='text-3xl m-5'>Login/Signup</h1>
     <button className='btn btn-primary m-2 '>Login with Google</button>
    </div>
  )
}

export default Login
