import express from "express";
import { db } from "./config/connection";
import { typeDefs, resolvers } from "./schemas";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT: any = process.env.PORT || 3001;
const app = express();
const router = express.Router();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(3000, () => console.log("Server is started"));

const startApolloServer = async (typeDefs, resolvers) => {
  console.log("Attempted to start server");
  await server.start().catch((error) => console.log(error));
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
