const express = require('express')
const app = express()

const port = 3000


app.get('/', (req, res) => {
  res.send('my first shortener project')
})


app.listen(port, () => {
  console.log(`App is running on the http://localhost:${port}`)  
})