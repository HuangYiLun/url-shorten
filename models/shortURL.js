const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: {
    type: String,
    require: true
  },
  shortURL: {
    type: String,
    require: true
  },
  isDone: {
    type: Boolean,
    require: false
  }
})

module.exports = mongoose.model('ShortURL', urlSchema)