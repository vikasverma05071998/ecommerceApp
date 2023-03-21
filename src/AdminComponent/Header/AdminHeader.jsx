import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div className="header max-width">
            <NavLink to="/">
            <i className="fa fa-arrow-circle-left" style={{fontSize:'48px',color:"red"}}></i>
            </NavLink>

            <div className="header-right">
                <div className="header-location-search-container ">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-rr-marker absolute-center location-icon"></i>
                            <div>jewelery</div>
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
                    <NavLink to='/Products' className="products lead fw-bold"> <h6>Products</h6> </NavLink>
                    </div>
                </div>
                
                <div className="profile-wrapper d-flex align-items-center justify-content-center">
                    <div className="header-profile-image">
                        <PersonIcon />
                    </div>
                    <span className="header-username ">Admin</span>
                </div>
            </div>
        </div>

    )
}

export default AdminHeader




