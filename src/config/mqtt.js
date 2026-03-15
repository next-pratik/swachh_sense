import mqtt from "mqtt"
import dotenv from "dotenv"

dotenv.config()

const client = mqtt.connect(process.env.MQTT_URL)

export default client