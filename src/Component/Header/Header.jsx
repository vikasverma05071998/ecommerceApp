import React from 'react'
import './Header.css'
// import logo from '../Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Home from '../Home/Home';
const Header = () => {
    const navigate=useNavigate()
    const state=useSelector((state)=>state.handleCart)
    const[user,loading,error]=useAuthState(auth)
    let signOutClick=()=>{
        auth.signOut()
navigate('/')
    }
    return (

        <>
            <div className="header max-width">
                <NavLink to="/home">
                  
                </NavLink>

                <div className="header-right">
                    <div className="header-location-search-container ">
                        <div className="location-wrapper">
                            <div className="location-icon-name">
                                <i className="fi fi-rr-marker absolute-center location-icon"></i>
                                <div>Gujrat</div>
                            </div>
                        </div>
                        <div className="location-search-separator"></div>
                        <div className="header-searchBar ms-3" >
                            <SearchIcon />
                            <input
                                className="search-input"
                                placeholder="Search for your favourite item"
                            />
                        </div>
                    </div>

                    <div className="profile-wrapper d-flex align-items-center justify-content-center">
                        <div className="header-profile-image">
                            <PersonIcon />
                        </div>
                        <span className="header-username ">{user?.email}</span>
                    </div>

                    <div className="profile-wrapper d-flex align-items-center justify-content-center">
                        <div className="header-profile-image">
                        <NavLink to='/Cart'>
                        <ShoppingCartIcon className='cartIcon'/>
                        </NavLink>
                        </div>
                        <span className="header-username ">{state.length}</span>
                    </div>
                    <div className="profile-wrapper d-flex align-items-center justify-content-center">
                    <div className="header-profile-image">
                        <ExitToAppIcon onClick={()=>signOutClick()} />
                    </div>
                </div>
                </div>            
            </div>    
        </>


    )
}

export default Header




