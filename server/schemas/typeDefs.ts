import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    authSub: String
    joinDate: String
    jobs: [Job]
  }
  type Job {
    _id: ID
    title: String
    description: String
    company: String
    applyDate: String
    applyMethod: String
    contact: String
    materials: [Materials]
    status: String
    notes: String
  }
  type Materials {
    resume: String
    coverLetter: String
    portfolio: String
  }
  type Query {
    getUser(authSub: String!): User
  }
  type Mutation {
    createUser(username: String!): User
  }
`;
export { typeDefs };
