import React from 'react'
import './button.css'

function button(props) {
  return (
    <div className='btn'>{props.txt}</div>
  )
}

export default button