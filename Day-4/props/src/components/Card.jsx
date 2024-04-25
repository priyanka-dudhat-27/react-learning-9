import React from 'react'

const Card = ({ name, age, learning }) => {
  return (
    <div>
        <h2>{name}</h2>
        <h4>{age}</h4>
        <p>{learning}</p>
    </div>
  )
}

export default Card
