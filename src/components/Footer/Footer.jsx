import React from 'react'
import { FooterCard } from '../../Layouts/AllComponents/AllComponents'

function Footer() {
  return (
   <>
     <footer>

      <FooterCard heading='Collections' listItems={['Rolex','Omega','Cartier','Montblanc','Hublot','SmartWatches']}/>
      
        <FooterCard heading='Front Fist' listItems={['Career','Press','News','Visit Us']}/>

        <FooterCard heading='Services' listItems={['Maintainence','Return Your Watch','FAQ','Certificates','Watch Restoration']}/>

      <div class="footer--section">
        <h2 class="footer--heading">Social</h2>

        <ul class="socials">
          <li><a href="https://twitter.com/SuyashT20"><i class="fab fa-2x fa-twitter"></i></a></li>
          <li><a href="https://github.com/SuyashTiwariCoder"><i class="fab fa-2x fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/suyashtiwari20/"><i class="fab fa-2x fa-linkedin"></i></a></li>
        </ul>
      </div>

      <div class="footer--last">Made by Love by Suyash Tiwari</div>
    </footer>
   </>
  )
}
export default Footer