// Importaciones
import React, { useEffect, useState } from 'react'
import './main.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import Service from './utils/service'
import CardItem from './components/cardItem'
import Search from './components/search';

function App() {
  const [news, setNews] = useState([])
  const [alerta, setAlerta] = useState(false)

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
    if (inputSearch !== '' && inputSearch.length > 0) {
      let dataFilter = news.filter((item) => (
        item.title.toLowerCase().includes(inputSearch.toLowerCase())
      ))
      // Validacion para lanzar alerta de busqueda vacia
      if (dataFilter.length > 0) {
        setAlerta(false)
        setNews(dataFilter)
      } else {
        setAlerta(true)
      }

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
    <Container >
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={12} justify='center' alignItems='center'>
          <Search searchFilter={searchFilter} />
        </Grid>
        {
          alerta && (
            <Grid item xs={12} sm={12} >
              <Alert severity='warning'>No existe información a mostrar .</Alert>
            </Grid>
          )
        }
      </Grid>
      <br />
      <Grid container>
        <Grid container item xs={12} sm={12} >
          {
            news.map((item, index) => (
              <CardItem key={index} item={item} />
            ))
          }
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
