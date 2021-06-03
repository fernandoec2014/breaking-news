import axios from 'axios'
import * as COMMON from './common'

const Service = () => {

  return {
    getNews: async () => {
      return await axios.get(COMMON.ENDPOINT.URL_NEWS)
        .then(response => {
          return response.data.data
        })
        .catch(err => {
          console.log('Error en ejecución de servicio: ', err)
          return false
        })
    }
  }
}

export default Service()