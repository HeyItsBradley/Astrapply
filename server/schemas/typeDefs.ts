import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
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
    materials: Materials
    status: String
    notes: String
  }
  type Materials {
    resume: String
    coverLetter: String
    portfolio: String
  }
  input materialsInput {
    resume: String
    coverLetter: String
    portfolio: String
  }
  type Query {
    getUser(authSub: String!): User
  }
  type Mutation {
    createUser(userName: String!): User
    createJob(
      authSub: String
      title: String
      description: String
      company: String
      applyMethod: String
      contact: String
      materials: materialsInput
      notes: String
    ): Job
    editJob(
      authSub: String
      jobId: ID
      title: String
      description: String
      company: String
      applyMethod: String
      contact: String
      materials: materialsInput
      notes: String
    ): Job
    deleteJob(jobId: ID, authSub: String): Job
  }
`;
export { typeDefs };
