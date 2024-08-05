import "dotenv/config"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import compression from "compression"
import logger from "morgan"
import path from "path"

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
