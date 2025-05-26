const express = require("express");
const router = express.Router();
// const bookControl = require('../bookcontrol');
const auth = require("./auth");
const {
  addBook,
  getAllBooks,
  addBooksToUser,
  getUserBooks,
} = require("./controls/bookscontrol");

router.use(auth);

router.post("/", addBook);
router.get("/", getAllBooks);
router.post("/add-to-user", addBooksToUser);
router.get("/user-books/:userId", getUserBooks);
// router.post('/replace', replaceUserBook);

module.exports = router;
