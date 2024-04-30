import React from 'react'

const Card = ({id,title}) => {
  return (
    <div>
        <h2>{id}</h2>
        <h4>{title}</h4>
    </div>
  )
}

export default Card