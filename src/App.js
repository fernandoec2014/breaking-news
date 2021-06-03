// Importaciones
import React, { useEffect, useState } from 'react'
import './main.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Service from './utils/service'
import CardItem from './components/cardItem'
import Search from './components/search';

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    Service.getNews()
      .then(response => {
        setNews(response)
      })
      .catch(() => {
        console.log('Error en consumo de servicio..')
      })
  }, [])


  const searchFilter = (inputSearch) => {
    if (inputSearch !== '') {
      let dataFilter = news.filter((item) => (
        item.title.toLowerCase().includes(inputSearch.toLowerCase())
      ))
      setNews(dataFilter)

    } else {
      Service.getNews()
        .then(response => {
          setNews(response)
        })
        .catch(() => {
          console.log('Error en consumo de servicio..')
        })
    }
  }

  return (
    <Container fixed>
      <Grid container>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <Search searchFilter={searchFilter} />
        </Grid>
      </Grid>

      <br />
      <Grid container>
        <Grid container item xs={12} sm={12}>
          {
            news.map((item, index) => (
              <>
                <CardItem item={item} />
              </>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
