const express = require("express");
const UserModel = require("../models/usersSchema");
const { check, validationResult } = require("express-validator");

// Create a Router
const router = express.Router();

// Get users
router.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
});

// Create user
router.post(
  "/",
  [
    check("username", "Username is required").notEmpty(),
    check("email", "Please use a valid email").isEmail(),
    check("password", "Please enter a password").notEmpty(),
    // check("password", "Please enter a strong password").isStrongPassword(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const userData = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const user = await UserModel.create(userData);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(400).json("Bad request");
    }
  }
);

// Get user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("ID not found");
  }
});

// Update user by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newUserData = req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(id, newUserData, {
      new: true,
    });
    res.status(202).json(user);
  } catch (error) {
    console.error(error);
  }
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json("Contact was deleted.");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
