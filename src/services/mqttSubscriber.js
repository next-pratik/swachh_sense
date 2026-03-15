require("dotenv").config()

const client = require("../config/mqtt")
const writeSensorData = require("./influxWriter")

client.on("connect", () => {

  console.log("Connected to MQTT")

  client.subscribe(process.env.MQTT_TOPIC)

})

client.on("message", (topic, message) => {

  const data = JSON.parse(message.toString())

  console.log("Sensor Data:", data)

  writeSensorData(data)

})