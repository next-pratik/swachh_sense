const { Point } = require("@influxdata/influxdb-client")
const writeApi = require("../config/influx")

function writeSensorData(data) {

  const point = new Point(data.sensor)
    .tag("device_id", data.deviceId)
    .floatField("value", data.value)

  writeApi.writePoint(point)

}

module.exports = writeSensorData