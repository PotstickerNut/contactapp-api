const express = require("express");
const UsersModel = require("../models/usersSchema");

const router = express.Router();

// Get users
router.get("/", async (req, res) => {
  try {
    const user = await UsersModel.find();
    res.status.json(user);
  } catch (error) {
    console.error(error);
  }
});

// Create user
router.post("/", async (req, res) => {
  const userData = req.body;
  try {
    const user = await UsersModel.create(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json("Bad request");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
});
// Get user by ID

// Update user by ID

// Delete user by ID

module.exports = router;
