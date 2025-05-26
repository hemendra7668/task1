const express = require("express");
require("dotenv").config();
const bookroutes = require("./bookroutes");
const userroutes = require("./userroutes");
// const bookcontrol = require("./controls/bookscontrol");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to the Book Store Backend App.");
});

app.use("/books", bookroutes);
app.use("/users", userroutes);

app.listen(PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${PORT || 3000}`);
});
