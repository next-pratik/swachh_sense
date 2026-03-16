import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./config/mongo.js"

import authRoutes from "./routes/authRoutes.js"
import deviceRoutes from "./routes/deviceRoutes.js"

import "./services/mqttSubscriber.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/devices", deviceRoutes)

connectDB()

app.listen(5000, () => {

  console.log("Server running on port 5000")

})