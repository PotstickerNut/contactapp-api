const express = require("express");
const ContactModel = require("../models/contactsSchema");

const router = express.Router();

// Get contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
  }
});

//Create contacts
router.post("/", async (req, res) => {
  const contactData = req.body;
  console.log(contactData);

  try {
    const contact = await ContactModel.create(contactData);
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(400).json("Bad request");
  }
});

// Get contacts by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const contact = await ContactModel.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json("ID not found");
  }
});

// Update contact by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newContactData = req.body;

  try {
    const contact = await ContactModel.findByIdAndUpdate(id, newContactData, {
      new: true,
    });
    res.status(202).json(contact);
  } catch (error) {
    console.error(error);
  }
});

// Delete a contact by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const contact = await ContactModel.findByIdAndDelete(id);
    res.status(200).json("Contact was deleted.");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
