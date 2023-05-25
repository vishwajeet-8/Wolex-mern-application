import mongoose from "mongoose";
import Color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongoDB Database ${conn.connection.host}`.bgRed);
  } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgYellow.white);
  }
};

export default connectDB;
