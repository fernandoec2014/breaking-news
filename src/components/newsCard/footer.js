import React from 'react'

const Footer = ({ item }) => {
  return (
    <header className='footer'>
      <div>
        <strong>Author: {item.author}</strong>
      </div>
      <span><strong>Category: {item.category}</strong></span>
    </header>
  )
}

export default Footer
