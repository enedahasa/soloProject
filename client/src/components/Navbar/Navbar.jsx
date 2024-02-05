import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {ShopContext} from '../../Context/ShopContext'
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'




const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

  return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={ logo } alt=""/>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
                :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
                <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
  )
}


export default Navbar