import React from 'react'
import Functions from '../utils/functions'

const Header = ({ item }) => {
  const published = Functions.getDateFormat(item.published_at)

  return (
    <header className='header'>
      <div className='header__title'><strong>{item.source}</strong></div>
      <span>{published}</span>
    </header>
  )
}

export default Header
