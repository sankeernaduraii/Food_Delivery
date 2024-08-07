import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Menu");
  // const[getTotalCartAmount]=useContext(StoreContext);
  return (
    <div className='navbar'>
      <div className="logo-container">
      <span className="company-name">MoonLight...</span>
      <Link to='/'>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIPe_egHXbPZF5zsSDJCtBVu032nCKuV2jGDlWx3bLq3Puo47hZ8aWNacmV4Nohgumts&usqp=CAU" 
          alt="Company Logo" 
          className='logo' 
        />
        </Link>
    
      </div>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a  href='#app-download'  onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a  href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2.png" alt="Search Icon" className="icon" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src="https://cdn2.vectorstock.com/i/1000x1000/44/51/basket-icon-vector-21894451.jpg" alt="Basket Icon" className="icon" />
          </Link>
          {/* <div className={getTotalCartAmount()===0?"":"dot"}></div> */}
        </div>
        <button className="navbar-button" onClick={()=>setShowLogin(true)}>Sign-In</button>
      </div>
    </div>
  );
};
export default Navbar;