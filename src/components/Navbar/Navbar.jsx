import React from 'react'
import '../Navbar/Navbar.css';


function Navbar() {
  return (
      
    <nav className="navigation">
    <p className="nav__logo">
      <a href="#">Front <span className="red">Fist</span> </a>
    </p>

    <div className="search__container">
      <input type="text" placeholder="Type Your Fav Brand"/><i className="fas fa-search"></i>
    </div>

    <p className="login__details">
      <a href="#"><i className="fas fa-2x fa-shopping-cart"></i></a>
      <a href="#"><i className="fad fa-2x fa-box-heart"></i></a>
      <a href="#"
        ><button className="btn--login">Login</button></a
      >
    </p>
</nav>
  )
};

export default Navbar;