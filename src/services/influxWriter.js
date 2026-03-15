import { Point } from "@influxdata/influxdb-client"
import { writeApi } from "../config/influx.js"

export function writeSensorData(sensor, value, deviceId) {

  const point = new Point(sensor)
    .tag("device_id", deviceId)
    .floatField("value", value)

  writeApi.writePoint(point)

}