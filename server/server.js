const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

const {home} = require("./controllers/pageCtrl")

app.get("/", home)
app.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.css"))
})

const { PORT } = process.env


console.log(__dirname)
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))