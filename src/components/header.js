import React from 'react'

const Header = ({ item }) => {
  return (
    <header className='header'>
      <div className='header__title'><strong>{item.source}</strong></div>
      <span>{item.published_at}</span>
    </header>
  )
}

export default Header
