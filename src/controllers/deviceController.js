import Device from "../models/Device.js"

export const createDevice = async (req, res) => {

  try {

    const device = await Device.create(req.body)

    res.json(device)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}


export const assignDevice = async (req, res) => {

  const { deviceMac, userId } = req.body

  try {

    const device = await Device.findOneAndUpdate(

      { deviceMac },

      { assignedUser: userId, status: "active" },

      { new: true }

    )

    res.json(device)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}


export const getDevices = async (req, res) => {

  const devices = await Device.find().populate("assignedUser")

  res.json(devices)

}