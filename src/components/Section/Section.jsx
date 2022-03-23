import React from 'react';
import { SectionCard } from '../../Layouts/AllComponents/AllComponents'


function Section() {
  return (
      <>
    <div class="section">
    <h2>New Arrivals</h2>

    <div class="newArrival__carasoul">
    
    <SectionCard src='/assets/landing page Images/pngwing.com.png' name='Heisenberg Blue Finish'  price={9999}/>
    
    <SectionCard src='/assets/landing page Images/category watch 2 .png' name='George Jensen white finish'  price={9999}/>
    
    <SectionCard src='/assets/landing page Images/category watch 3 .png' name='Rado ferrari finish'  price={9999}/>
    
    <SectionCard src='/assets/landing page Images/category watch 4 .png' name='Hubolt sailor finish'  price={9999}/>

    </div>
  </div>

  <div class="section--content">
    <p class="section--content__para">
      Time is Precious , And So are you . <br />
      We have Selected the Best Watches from Whole World . <br />
      To make Every Luxury Brand available under one website <br />
    </p>
    <img src="//unsplash.it/1080/720?car" alt="" />
  </div>
  </>
  )
}

export default Section