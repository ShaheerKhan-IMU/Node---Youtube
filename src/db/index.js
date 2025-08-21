import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionURL = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database Connected, DB Host: ${connectionURL.connection.host}`
    );
  } catch (error) {
    console.log("Error found in Connection" + error);
    process.exit(1);
  }
};

export default connectDB;
