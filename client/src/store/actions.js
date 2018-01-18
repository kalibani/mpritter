import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Authorization: token
  }
})


export const doLogin = ({ commit }, payload) => {
  http.post('/users/auth/login', payload)
  .then(({data}) => {
    localStorage.setItem('token', data.token)
    if (data.message == "Login Succes!") {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        location.reload()
        router.push('/home')
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const doRegister = ({ commit }, payload) => {
  http.post('/users/auth/register', payload)
  .then(({data}) => {
    if (data.message == 'Register Success!') {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getProfile = ({ commit }) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.post('/users/profile')
    .then(({data}) => {
      commit('saveUser', data)
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    console.log('belum login');
  }
}

export const postTweet = ({ commit }, payload) => {
  http.post('/twits', payload)
  .then(({data}) => {
    console.log('postTweet', data);
    commit('savePostTweets', data)
  })
  .catch((err) => {
    console.log(err)
  })
}
