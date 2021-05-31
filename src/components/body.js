import React from 'react'

const Body = ({ item }) => {
  return (
    <div>
      <label>{item.title}</label>
      <br />
      <label>{item.description}</label>
      <img src={item.image} alt={item.title} />
    </div >
  )
}

export default Body
