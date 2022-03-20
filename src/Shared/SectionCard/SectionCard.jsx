import React from 'react'

function SectionCard({src , name , price}) {
  return (

    
      <div class="card__newArrival">
        <img src={src} alt="Warch Img" />
        <p class="img--info">{name}</p>
        <p class="img--price"><i class="fas fa-rupee-sign"></i>{price}</p>
      </div>

  
  )
}

export default SectionCard