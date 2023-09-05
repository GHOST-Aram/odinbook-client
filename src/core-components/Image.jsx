import React from 'react'

const Image = ({src, name, className}) => {
  return (
    <img src={src} alt={name} className= {className || ''} />
  )
}

export default Image