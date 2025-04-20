import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Database Connection Successful");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

export default connectDB;
