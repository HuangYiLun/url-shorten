const db = require('../../config/mongoose')
const ShortURL = require('../shortURL')

db.once('open', () => {
  for (let i = 0; i < 10; i++ ) {
    ShortURL.create({
      originalURL: `testoriginalurl${i}`,
      shortURL: `testshorturl${i}`
  })
  }
  console.log('db done')
})