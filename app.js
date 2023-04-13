const express = require('express')
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.use(routes)


app.listen(port, () => {
  console.log(`App is running on the http://localhost:${port}`)
})