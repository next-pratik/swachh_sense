import mongoose from "mongoose"

const deviceSchema = new mongoose.Schema({

  deviceMac: {
    type: String,
    unique: true
  },

  deviceName: String,

  location: String,

  assignedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },

  status: {
    type: String,
    default: "unclaimed"
  }

}, { timestamps: true })

export default mongoose.model("Device", deviceSchema)