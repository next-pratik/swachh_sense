require("dotenv").config()

const client = require("../src/config/mqtt.js")
const writeSensorData = require("../src/services/influxWriter.js")

client.on("connect", () => {

  console.log("Connected to MQTT")

  client.subscribe(process.env.MQTT_TOPIC)

})

client.on("message", (topic, message) => {

  const data = JSON.parse(message.toString())

  console.log("Sensor Data:", data)

  writeSensorData(data)

})