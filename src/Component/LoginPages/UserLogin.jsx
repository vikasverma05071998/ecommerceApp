import React, { useState } from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

 const UserLogin = () => {
const [email,setEmail]=useState('')
const[password,setPassword]=useState('');
    const navigate =useNavigate()

    const toAdmin=()=>{
        navigate("/admin")
    }
// User Login
    const signIn=(e)=>{
        e.preventDefault()
signInWithEmailAndPassword(auth,email,password)
.then(auth=>{navigate('/home')})
.catch(error=>console.error(error))
    }

    // User sign UP
    const signUp=(e)=>{
        e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then(auth=>console.log(auth))
    .catch(error=>console.error(error))
       console.log("User Registered");
    }
    return (
        <div>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <div className="adminIcon mt-5">
                            <PersonIcon sx={{ fontSize: "80px" }} className="admin" />
                            <div className="lable">
                                User
                            </div>
                        </div>
                        <form className="login ms-4">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" value={email} placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" value={password} placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="button login__submit" onClick={signIn}>
                                <span className="button__text"  >Sign In</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <button className="button login__submit" onClick={signUp}>
                                <span className="button__text"  >Sign Up</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>

                        </form>
                        <div className="register">
                        <h3>You must be<span className='register btn btn-success' onClick={toAdmin}>  Admin ?</span></h3>
                       </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default UserLogin
