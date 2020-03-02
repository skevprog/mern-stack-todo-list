const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold)
  } catch(err) {
    console.error(`Something went wrong ${err.message}`);
    // exit application
    process.exit(1); 
  }
}

module.exports = connectDB;