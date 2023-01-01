import React, { useState } from 'react'
import photu from "../assets/images/signup.jpeg"
import {signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom'
import {auth} from "../firebase"
import "./signup.css"

function Signup() {
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    // e.preventDefault();
    // const mail=e.target[0].value;
    // const password=e.target[1].value;
    // console.log(auth);
    // console.log(mail,password);
    // try{
      // const res=await signInWithEmailAndPassword(auth,mail,password)
      navigate("/");
    // }catch(err){
      // console.log(err);
    // }

  }
  return (
    <div className='main'>
        <div className='phtot'>
            <img src={photu} alt=""/>
        </div>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>PowerMuscle Gym</span>
                <span className='title' style={{color:'orange'}}>Sign up</span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Enter Email'/>
                    <input type='password' placeholder='Enter password'/>
                    <button>Sign up</button>
                </form>
                {/* {err && <p>Wrong Email or password!!!!</p>} */}
                <p>You don't have an account?<Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup