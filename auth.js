require('dotenv').config();

const auth = (req, res, next) => {
  const key = req.header('x-api-key');
  if (!key || key !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }
  next();
};

module.exports = auth;
