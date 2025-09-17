import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lahmerons:LAHMARons2003@cluster0.5uvls5v.mongodb.net/donuts"
    )
    .then(() => console.log("DB connected"));
};
