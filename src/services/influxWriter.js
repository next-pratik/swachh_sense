import { Point } from "@influxdata/influxdb-client"
import { writeApi } from "../config/influx.js"

export function writeSensorData(sensor, value, deviceId = "esp32_01") {

  try {

    const point = new Point(sensor)
      .tag("device", deviceId)
      .floatField("value", value)

    writeApi.writePoint(point)

    console.log(`InfluxDB write → ${sensor}: ${value}`)

  } catch (error) {

    console.error("InfluxDB write error:", error)

  }

}