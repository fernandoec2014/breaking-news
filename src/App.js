// Importaciones
import React, { useEffect, useState } from 'react'
import './main.css';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Service from './utils/service'
import CardItem from './components/cardItem'
import Search from './components/search'
import AlertBox from './components/alertBox'

function App() {
  const [news, setNews] = useState([])
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    Service.getNews()
      .then(response => {
        setNews(response)
      })
      .catch(() => {
        console.log('Error en consumo de servicio.')
        setAlert(true)
      })
  }, [])

  const searchFilter = (inputSearch) => {
    setAlert(false)
    if (inputSearch !== '' && inputSearch.length > 0) {
      let dataFilter = news.filter((item) => (
        item.title.toLowerCase().includes(inputSearch.toLowerCase())
      ))
      // Validacion para lanzar alerta de busqueda vacia
      if (dataFilter.length > 0) {
        setAlert(false)
        setNews(dataFilter)
      } else {
        setAlert(true)
      }

    } else {
      Service.getNews()
        .then(response => {
          setNews(response)
        })
        .catch(() => {
          console.log('Error en consumo de servicio.')
          setAlert(true)
        })
    }
  }

  const renderAlert = (type, message) => {
    return (
      <Grid item xs={12} sm={12} >
        <AlertBox level={type} message={message} />
      </Grid>
    )
  }

  const renderNews = (news) => {
    if (news) {
      return (
        news.map((item, index) => (
          <CardItem key={index} item={item} />
        ))
      )
    } else {
      return renderAlert('error', 'Service not available ')
    }
  }

  return (
    <Container >
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={12} justify='center' alignItems='center'>
          <Search searchFilter={searchFilter} />
        </Grid>
        {
          alert && renderAlert('warning', 'No search results.')
        }
      </Grid>
      <br />
      <Grid container>
        <Grid container item xs={12} sm={12} >
          {
            renderNews(news)
          }
        </Grid>
      </Grid>

    </Container>
  )
}

export default App
