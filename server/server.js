const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,

})

console.log('server running')
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {home, css, button} = require("./controllers/pageCtrl")

app.get("/", home)
app.get("/css", css)
app.get("/js", button)

const { PORT } = process.env


console.log(__dirname)
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))