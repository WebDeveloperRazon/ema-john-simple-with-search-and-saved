import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header" >
           <NavLink to="/shop">
           <img className="logo" src={logo} alt="" />
           </NavLink>
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Ordered Items</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;