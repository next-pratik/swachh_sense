import User from "../models/User.js"

export const createUser = async (req, res) => {

  try {

    const user = await User.create(req.body)

    res.json(user)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}

export const getUsers = async (req, res) => {

  const users = await User.find()

  res.json(users)

}