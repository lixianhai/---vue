import axios from 'axios'
// import server from '@/server'

const request = axios.create({
//   baseURL: server,
//   timeout: 50000
})

request.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.statusText)
    }
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default request
