const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");

const mongoConfig = require("./config/mongoConfig");
const usersRouter = require("./routes/usersRouter");
const contactsRouter = require("./routes/contactsRouter");
const authRouter = require("./routes/");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Create routes
app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Contact API.");
});

app.use("/users", usersRouter);

app.use("/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
  mongoConfig();
});
