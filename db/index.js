const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongooseConnection = await mongoose.connect(
      `${process.env.MONGO_URL}/copy-pasta`
    );
    console.log(`\nMongoDB connected: ${mongooseConnection.connection.host}\n`);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
