
const mongoose = require('mongoose');
  const BookModel= new mongoose.Schema({
    isbn: String,
    title: String,
    subTitle: String,
    author: String,
    publish_date: String,
    publisher: String,
    pages: Number,
    description: String,
    website: String
  });
  
  module.exports = mongoose.model('Book', BookModel);
  
  
 

  class AddListOfBooks {
    constructor({ userId, collectionOfIsbns = [] }) {
      this.userId = userId;
      this.collectionOfIsbns = collectionOfIsbns;
    }
  }
  
  module.exports = AddListOfBooks;
  
  
  class CollectionOfIsbn {
    constructor({ isbn }) {
      this.isbn = isbn;
    }
  }
  
  module.exports = CollectionOfIsbn;
  
  
  class AllBooksModel {
    constructor({ books = [] }) {
      this.books = books;
    }
  }
  
  module.exports = AllBooksModel;
  
  
  class StringObject {
    constructor({ isbn, userId }) {
      this.isbn = isbn;
      this.userId = userId;
    }
  }
  
  module.exports = StringObject;
  

  class BooksResult {
    constructor({ userId, message }) {
      this.userId = userId;
      this.message = message;
    }
  }
  
  module.exports = BooksResult;
  
 
  
  
  class ReplaceIsbn {
    constructor({ userId, isbn }) {
      this.userId = userId;
      this.isbn = isbn;
    }
  }
  
  module.exports = ReplaceIsbn;
  
  
  class MessageModel {
    constructor({ code, message }) {
      this.code = code;
      this.message = message;
    }
  }
  
  module.exports = MessageModel;
  