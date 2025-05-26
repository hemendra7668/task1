const mongoose = require('mongoose');
class RegisterViewModel {
    constructor({ userName, password }) {
      this.userName = userName;
      this.password = password;
    }
  }
  
  module.exports = RegisterViewModel;
  
  
  class CreateUserResult {
    constructor({ userId, username, books = [] }) {
      this.userId = userId;
      this.username = username;
      this.books = books;
    }
  }
  
  module.exports = CreateUserResult;
  
  
  class GetUserResult {
    constructor({ userId, username, books = [] }) {
      this.userId = userId;
      this.username = username;
      this.books = books;
    }
  }
  
  module.exports = GetUserResult;

class LoginViewModel {
    constructor({ userName, password }) {
      this.userName = userName;
      this.password = password;
    }
  }
  
  module.exports = LoginViewModel;
  
  
  class TokenViewModel {
    constructor({ token, expires, status, result }) {
      this.token = token;
      this.expires = expires;
      this.status = status;
      this.result = result;
    }
  }
  
  module.exports = TokenViewModel;
  