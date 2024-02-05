import { gql } from "@apollo/client";
export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      _id
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $desc: String!
    $status: Status!
    $clientId: ID!
  ) {
    addProject(name: $name, description: $desc, status: $status, clientId: $clientId) {
      _id,
      name,
      status
    }
  }
`;
export const UPDATE_PROJECT=gql`
mutation updateProject(
  $name:String!
  $desc:String!
  $status:StatusUpdate!
  $id:ID!
){
  updateProject(id:$id,name:$name,description:$desc,status:$status)
  {
    _id
    name
    status
  }
}
`