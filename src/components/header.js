import React from 'react'

const Header = ({ item }) => {
  return (
    <div>
      <label>{item.source}</label>&nbsp;&nbsp;
      <label>{item.published_at}</label>
    </div>
  )
}

export default Header
