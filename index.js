const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const compression = require("compression")
const logger = require("morgan")
const path = require("path")

require("dotenv/config")

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use(compression())
app.use(logger("dev"))
app.use(
  express.json({
    limit: "50mb",
  })
)
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
)
//use public folder to serve static files
app.use(`/public`, express.static(path.join(__dirname, `public`)))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
