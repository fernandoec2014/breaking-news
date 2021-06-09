import React from 'react'

const Body = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <label>{item.description}</label>
      <br />
    </div >
  )
}

export default Body
