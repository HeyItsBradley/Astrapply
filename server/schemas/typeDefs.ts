import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
  }
  type Query {
    getUser(authSub: String!): User
  }
  type Mutation {
    createUser(username: String!): User
  }
`;
export { typeDefs };
