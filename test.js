const jwt = require('jsonwebtoken');
const secret = 'mysecretkey';

function createJWT(userId, userRole, expiresIn) {
  const token = jwt.sign({ userId, userRole }, secret, { expiresIn });
  return token;
}

function extractDataFromJWT(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
        console.error('Invalid token');
      } else if (error instanceof jwt.TokenExpiredError) {
        console.error('Token expired');
      }
    return null;
  }
}

// Example usage

const userRole = 'admin';
const expiresIn = '5min';
const token = createJWT("1234", userRole, expiresIn);
console.log(token);

const extractedData = extractDataFromJWT(token);
console.log(extractedData);


