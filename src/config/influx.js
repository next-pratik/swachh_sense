import { InfluxDB } from "@influxdata/influxdb-client"
import dotenv from "dotenv"

dotenv.config()

const influx = new InfluxDB({
  url: process.env.INFLUX_URL,
  token: process.env.INFLUX_TOKEN
})

export const writeApi = influx.getWriteApi(
  process.env.INFLUX_ORG,
  process.env.INFLUX_BUCKET
)