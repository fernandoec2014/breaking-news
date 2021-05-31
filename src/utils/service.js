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
          return false
        })
    }
  }
}

export default Service()