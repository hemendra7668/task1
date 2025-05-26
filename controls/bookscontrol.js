const Book = require("../modal/bookmodal");
const User = require("../modal/usermodal");



// exports.getBooks = (req, res) => {
//   res.json(books);
// };

exports.getBookById = async (req, res) => {
  const book =await Book.findOne((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};
exports.getAllBooks = async (req, res) => {
  const book = await Book.find();

  res.status(201).json(book);
};

exports.getUserBooks = async (req, res) => {
  const { userId, isbn } = req.body;
  // const userId = req.params.userId;
  const user = await User.findById(userId).populate("books");
  if (!user) return res.status(404).json({ message: "User not found" });

  user.books = [isbn];
  await user.save();

  res
    .status(200)
    .json({ userId: user._id, isbn, message: "Book replaced successfully" });
};
