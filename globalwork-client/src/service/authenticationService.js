import api from '@/service/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}

// authenticationService.register({
//   email: 'tumadrexd@gmail.com',
//   password: 'umu'
// })
