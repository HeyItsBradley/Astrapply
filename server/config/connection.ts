import mongoose from "mongoose";

interface MongooseOptions extends mongoose.ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const mongooseOptions: MongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://127.0.0.1:27017/astrapply", mongooseOptions);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to database: ", error);
});

db.once("open", () => {
  console.log("Connected to database");
});

export { db };
