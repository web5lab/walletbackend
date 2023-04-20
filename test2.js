const jwt = require('jsonwebtoken');
const secret = '9ed69696b7e0d0c71a33fba0ebf931f33e053350c2ec9db32edecfea787cb0dcd79ba7e964eb48ef1e45596aa845b54ad402e05ead75fb2ed2166482efafe7b8fec7d07616f4abed6edd294b631cbce6';

function createJWT(data) {
  const token = jwt.sign({ data }, secret);
  return token;
}



// Example usage
const data = {
  _id: '643f7b5087c94c6e0f4c0e32',
  userId: 4001
}



const token = createJWT(data);
console.log(token);


