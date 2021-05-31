// Importaciones
import React, { useEffect, useState } from 'react'

import Service from './utils/service'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

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
      {
        news.map((item, index) => (
          <>
            <Header item={item} />
            <Body item={item} />
            <Footer item={item} />
            <br />
          </>
        ))
      }
    </div>
  )
}

export default App
