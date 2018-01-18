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

export const getAllTweet = ({ commit }) => {
  http.get('/twits')
  .then(({data}) => {
    console.log('ini twit', data);
    commit('saveTwits', data)
  }).catch((err) => {
    console.log(err)
  })
}

export const deleteTwit = ({ commit }, id) => {
  http.delete('/twits/'+ id)
  .then(({data}) => {
    commit('saveDelete', data)
  })
  .catch((err) => {
    console.log(err)
  })
}


export const updateProfile = ({ commit }, payload) => {
  console.log('ini payload', payload);
  let user = new FormData()
  user.append('username', payload.username)
  user.append('fullname', payload.fullname)
  user.append('password', payload.password)
  user.append('image', payload.image)
  http.put('/users/' +payload.id, user)
  .then(({data}) => {
    router.push('/home')
  })
  .catch((err) => {
    console.log(err)
  })
}
