export const savePostTweets = (state, payload) => {
  state.twits.push(payload.datatwit)
}

export const saveUser = (state, payload) => {
  state.profile = payload
}

export const saveTwits = (state, payload) => {
  state.twits = payload
}

export const saveDelete = (state, payload) => {
  let index = state.twits.findIndex( a => a._id === payload.result._id)
  if (index !== -1) {
    state.twits.splice(index, 1)
  }

}
