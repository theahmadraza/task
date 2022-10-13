import React from 'react'
import './button.css'

function button(props) {
  return (
    <>
    <a href="/" className='btn'>{props.txt}</a>
    <button>New Button</button>
    </>
  )
}

export default button