import { gql } from "@apollo/client";

export const CREATE_JOB = gql`
  mutation Mutation(
    $authSub: String
    $title: String
    $company: String
    $applyMethod: String
    $description: String
    $contact: String
    $materials: materialsInput
    $notes: String
  ) {
    createJob(
      authSub: $authSub
      title: $title
      company: $company
      applyMethod: $applyMethod
      description: $description
      contact: $contact
      materials: $materials
      notes: $notes
    ) {
      _id
    }
  }
`;
