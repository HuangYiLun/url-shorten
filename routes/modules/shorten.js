const express = require('express')
const router = express.Router()

const ShortURL = require('../../models/shortURL')
const shortenURL = require('../../shortenURL')

// 檢查原始url是否重複 新增新shortURL

router.post('/', (req, res) => {
  // 輸入的url空白時 回到home.handlebars
  if (req.body.url.trim() === "") return res.redirect('/')

  const originalURL = req.body.url
  const shortURL = shortenURL(5)

  ShortURL.findOne({ originalURL })
    .lean()
    .then(data =>
      data ? data : ShortURL.create({ originalURL, shortURL }))
    .then(data => {
      res.render('shorten', { origin: req.get('origin'), shortURL: data.shortURL })
    })
    .catch(error => console.error(error))
})

module.exports = router

