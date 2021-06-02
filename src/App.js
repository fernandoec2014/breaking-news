// Importaciones
import React, { useEffect, useState } from 'react'
import './main.css';
import Service from './utils/service'
import CardItem from './components/cardItem'


import Grid from '@material-ui/core/Grid';


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

  return (
    <div>

      <Grid container>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <h2>Lista de Noticias</h2>
        </Grid>
      </Grid>

      <Grid container >
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

    </div>
  )
}

export default App
