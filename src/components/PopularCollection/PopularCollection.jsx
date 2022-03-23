import React from 'react'
import { PopularCollectionCard } from '../../Layouts/AllComponents/AllComponents'


function PopularCollection() {
  return (
 <>
  <div class="section">
      <h2>Popular Collections</h2>
      <div class="popular">

<PopularCollectionCard src='/assets/landing page Images/vitae-london-331tAGMqa8Y-unsplash.jpg' name='Ladies'/> 
<PopularCollectionCard src='/assets/landing page Images/klim-musalimov-nmhZgiSU8_0-unsplash.jpg' name='Smart Watches'/>
<PopularCollectionCard src='/assets/landing page Images/men section .jpg' name='Gents'/>
         
      </div>
    </div>
 </>
  )
}

export default PopularCollection