const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // connect to mongoDB
    console.log('MongoDB connected');
  } catch {
    console.log('Error connecting to MongoDB');
  }
}

module.exports = { dbConnection };