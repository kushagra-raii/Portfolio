import mongoose, { connection } from "mongoose";

const dbConnect = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Database connected");

    const connection = mongoose.connection;

    connection.on("error", (error) => {
        console.log(error);
        process.exit(1);    
    })

    connection.on("connected", () => {
        console.log("DB connected Successfully");
      });    


  } catch (error) {
    console.log(error);
  }
}