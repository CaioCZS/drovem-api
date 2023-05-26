import express from "express"
import cors from "cors"
import { db } from "./database/db.connection.js"
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, console.log(`App listening in port:${port}`))
