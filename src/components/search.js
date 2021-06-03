import { useState } from 'react'

const Search = ({ searchFilter }) => {

  const [inputSearch, setInputSearch] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchFilter(inputSearch)
    setInputSearch('')
  }

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value)
  }

  return (
    <>      
      <form onSubmit={handleSubmit}>
        <h1>Breaking News</h1>
        <input
          type='text'
          placeholder='Que buscar'
          value={inputSearch}
          onChange={handleInputSearch}
        />
        <button>Buscar</button>
      </form>
    </>
  )
}

export default Search
