import React from 'react'

function Card({title, imageUrl}) {
  return (
    <div>
        <img src={imageUrl} alt="" />
    <h3>{title}</h3>
    </div>
  )
}

export default Card