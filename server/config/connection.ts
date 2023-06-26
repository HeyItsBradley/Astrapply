import mongoose from "mongoose";
require("dotenv").config();

interface MongooseOptions extends mongoose.ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const mongoUri: string = process.env.DATABASE_URL as string;

const mongooseOptions: MongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoUri, mongooseOptions);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to database: ", error);
});

db.once("open", () => {
  console.log("Connected to database");
});

export { db };
