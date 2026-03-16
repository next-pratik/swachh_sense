import client from "../config/mqtt.js"
import { storeSensorData } from "./sensorService.js"

client.on("connect", () => {

  console.log("Connected to MQTT")

  client.subscribe("sensor/#")

})

client.on("message", async (topic, message) => {

  const payload = message.toString()

  const parts = topic.split("/")

  const deviceMac = parts[1]
  const sensor = parts[2]

  const value = parseFloat(payload)

  console.log(deviceMac, sensor, value)

  await storeSensorData(deviceMac, sensor, value)

})