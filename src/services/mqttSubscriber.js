import client from "../config/mqtt.js"
import { writeSensorData } from "./influxWriter.js"

client.on("connect", () => {

  console.log("Connected to MQTT")

  client.subscribe("sensor/#", (err) => {

    if (err) {
      console.error("Subscription failed:", err)
    } else {
      console.log("Subscribed to sensor/#")
    }

  })

})

client.on("message", (topic, message) => {

  const payload = message.toString()

  const sensor = topic.split("/")[1]

  const value = parseFloat(payload)

  console.log(`Sensor: ${sensor} Value: ${value}`)

  writeSensorData(sensor, value, "esp32_01")

})