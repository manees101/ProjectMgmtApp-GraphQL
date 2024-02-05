import { gql } from "@apollo/client";
export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      status
    }
  }
`;
export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      _id
      name,
      description,
      status,
      client{
        _id,
        name,
        email,
        phone
      }
    }
  }
`;
