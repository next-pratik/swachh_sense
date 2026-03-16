import SensorData from "../models/SensorData.js"

export const storeSensorData = async (deviceMac, sensor, value) => {

  try {

    await SensorData.create({
      deviceMac,
      sensor,
      value
    })

  } catch (error) {

    console.error("Sensor write error", error)

  }

}