import React ,{useState} from 'react'
import "./Style.css"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate =useNavigate()
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('');
    // admin sign in function
    const adminSign=(e)=>{
        e.preventDefault()
        if(email=="vikasverma71998@gmail.com" && password=='Exam@2019'){
            navigate('/add')
            console.log("admin logged in");
            alert('admin is logged in')
        }else{
            console.log("admin  not logged in");
            alert('wrong email and password')
        }
    }
    return (
        <div>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                    <div className="adminIcon mt-5">
                    <SupervisorAccountIcon sx={{ fontSize: "80px" }} className="admin"/>
                    <div className="lable">
                    Admin
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
                            <button className="button login__submit"  onClick={adminSign}>
                                <span className="button__text" >Log In</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
