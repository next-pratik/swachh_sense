const mqtt = require("mqtt")
require("dotenv").config()

const client = mqtt.connect(process.env.MQTT_URL)

module.exports = client