import React from "react";
import "./style/Navbar.css";
import {NavLink} from 'react-router-dom'
import {cartData} from '../pages/SingleProduct';

const Navbar = () => {
  return (
    <div className="navbarContainerdiv">
      <div className="navbarWrapperdiv">
        <div className="leftdiv">
            <NavLink to={'/Home'} className='logo'><a>RR Collections </a></NavLink>
        </div>
        <div className="rightdiv">
        <div className='menuitems'>
        <NavLink to={'/Signup'}><a>Register</a></NavLink>
        <NavLink to={'/Login'}><a>Login</a></NavLink>
        </div>
          
        <div className='cart'>
          <NavLink to={`/ShoppingCart`}><span><i class="fas fa-cart-shopping"></i></span></NavLink>
        </div>
        </div>
      </div>
     <div className="addContainer">
       Super Deal!! Free Shipping on orders over £50
      </div>
    </div>
  );
};

export default Navbar;
