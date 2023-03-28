const mongoose = require('mongoose');
const mongodbUri = 'mongodb+srv://shiva:77395644@cluster0.3glqe9i.mongodb.net/testdb';

const databaseConnection = function (callback) {
   mongoose
      .connect(mongodbUri, {
         useNewUrlParser: true,
         useUnifiedTopology: false,
      })
      .then((res) => {
         console.log('database connected');
         callback();
      })
      .catch((err) => {
         console.log(err);
      });
};

module.exports = databaseConnection;
