const express = require('express')
const router = express.Router()
const ShortURL = require('../../models/shortURL')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL

  ShortURL.findOne({ shortURL })
    .lean()
    .then(data =>
      res.redirect( data.originalURL )
    )
    .catch(error => console.error( error ))

})


module.exports = router