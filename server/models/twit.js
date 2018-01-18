const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let twitSchema = new Schema({
  posted_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isi:{
    type: String
  },
  hashtag: [{ type: String}]
})

module.exports = mongoose.model('Twitter', twitSchema)
