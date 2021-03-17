import api from '@/service/api'

export default {
    register (credentials) {
        return api().post('register', credentials)
    },

    ticketRegister (credentials) {
        return api().post('registerTicket', credentials)
    },

    login (credentials) {
        return api().post('login', credentials)
    }
}

// authenticationService.register   ({
//   email: 'tumadrexd@gmail.com',
//   password: 'umu'
// })
