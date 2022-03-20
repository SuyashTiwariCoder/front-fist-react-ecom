import React from 'react'

function FooterCard({heading , listItems}) {
  return (
   <>
    <div class="footer--section">
        <h2 class="footer--heading">{heading}</h2>
        <ul>
        {listItems.map(item => (
      <li key={item}>{item}</li>
    ))}
        </ul>
      </div>
   </>
  )
}

export default FooterCard