import React from 'react'
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div class="main__content">
    <div class="hero__heading">
      Wear the watch you like

      <Link to="/productsPage"
        ><button>Let's <span class="red"> Shop</span></button></Link>
    </div>

    <div class="heroImage__container">
      <img src="/assets/landing page Images/Hero Image .png" alt="Hero-Image" />
    </div>
  </div>
  )
}

export default Banner;