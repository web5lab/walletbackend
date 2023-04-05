const jwt = require('jsonwebtoken');
const secret = 'mysecretkey';

function createJWT(data, expiresIn) {
  const token = jwt.sign({ data }, secret, { expiresIn });
  return token;
}

function extractDataFromJWT(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Example usage
const data = 'Hello World!';
const expiresIn = '1h';
const token = createJWT(data, expiresIn);
console.log(token);

const extractedData = extractDataFromJWT(token);
console.log(extractedData); // "Hello World!"
