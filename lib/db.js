import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Db success"))
    .catch((error) => console.log(error.message));
};

export default connectDB;
