export const savePostTweets = (state, payload) => {
  console.log(payload);
  state.twits.push(payload.data)
  console.log('masuk', state.twits);
}

export const saveUser = (state, payload) => {
  console.log('pay', payload);
  state.profile = payload
  console.log('profile', state.profile);
}
