import React from 'react'

const Footer = ({ item }) => {
  return (
    <div>
      <label>Author: {item.author}</label>
      <br />
      <label>Category: {item.category}</label>
    </div >
  )
}

export default Footer
