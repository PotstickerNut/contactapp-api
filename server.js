const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Contact App.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
