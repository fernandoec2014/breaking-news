import { useState } from 'react'
import Typography from '@material-ui/core/Typography'

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
      <div className='search'>
        <Typography variant='h4' gutterBottom align='center'>
          Breaking News
        </Typography>

        <form onSubmit={handleSubmit} className='searching'>
          <input
            type='search'
            placeholder='Search news...'
            value={inputSearch}
            onChange={handleInputSearch}
          />
          <button className='btn-search'>Search</button>
        </form>
      </div>
    </>
  )
}

export default Search
