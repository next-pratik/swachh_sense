import express from "express"
import {
  createDevice,
  assignDevice,
  getDevices
} from "../controllers/deviceController.js"

const router = express.Router()

router.post("/", createDevice)

router.post("/assign", assignDevice)

router.get("/", getDevices)

export default router