import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { HomeContext } from '../../Contexts/HomeContext'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const {getTotalCartItems} = useContext(HomeContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            {/* <img src={logo} alt="Website Logo" /> */}
            <p>Swadeshi<span>Hub</span></p>
        </div>
        <ul className="nav-menu">
            <li><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/About'>About</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/ContactUs'>Contact Us</Link></li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar