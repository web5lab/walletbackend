const mongoose = require('mongoose');
const mongodbUri = 'mongodb+srv://shiva:77395644@cluster0.3glqe9i.mongodb.net/test';

const databaseConnection = function (callback) {
   mongoose
      .connect(mongodbUri, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
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
