// require("dotenv").config({ path: "./env" });
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error has found in connecting the DB ", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is ready at PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error has found in connecting the DB ", error);
  });

/* easy approach
import express from "express";
app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error found" + error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Your server is ready at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error found in Connection" + error);
    throw error;
  }
})();*/
