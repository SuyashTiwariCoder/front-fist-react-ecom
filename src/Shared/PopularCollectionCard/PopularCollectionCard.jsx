import React from 'react'

function PopularCollectionCard({src ,name}) {
  return (
   <>
     <div class="collection--item">
          <div class="ladies">
            <img
              src={src}
              alt="Popular Collection Image"
            />

            <div class="img--info">{name}</div>
            <div class="textAlign--center"><a href="#">Discover</a></div>
          </div>
        </div>
   </>
  )
}

export default PopularCollectionCard