import mongoose from "mongoose"

const sensorSchema = new mongoose.Schema({

  deviceMac: String,

  sensor: String,

  value: Number,

  timestamp: {
    type: Date,
    default: Date.now
  }

})

export default mongoose.model("SensorData", sensorSchema)