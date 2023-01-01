import React from 'react'
import photu from "../assets/images/loginpt.jpeg"
import { Link,useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase';
import "./signup.css"

function Login() {
    
    const navigate=useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const DisplayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        console.log(DisplayName,email,password);
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
    }

  return (
    <div className='main'>
        <div className='phtot'>
            <img src={photu} alt=""/>
        </div>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>PowerMuscle Gym</span>
                <span className='title' style={{color:'orange'}}>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Name'/>
                    <input type='email' placeholder='Enter Email'/>
                    <input type='phone' placeholder='Enter Phone no.'/>
                    <input type='password' placeholder='Enter password'/>
                    <button>Login</button>
                </form>
                <p>You do have an account?<Link to="/signup">Signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login