import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query($authSub: String!) {
    getUser(authSub: $authSub) {
      joinDate
      jobs {
        title
        status
        notes
        materials {
          coverLetter
          portfolio
          resume
        }
        description
        contact
        company
        applyMethod
        applyDate
      }
    }
  }
`;
