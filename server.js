const express = require("express");
require("dotenv").config();

const mongoConfig = require("./config/mongoConfig");
const contactsRouter = require("./routes/contactsRouter");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Contact App.");
});

app.use("/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
  mongoConfig();
});
