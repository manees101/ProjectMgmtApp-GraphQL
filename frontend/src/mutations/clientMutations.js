import { gql } from "@apollo/client";
export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      _id
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addClient(
    $name: String!
    $email: String!
    $phone: String!
    $address: String!
  ) {
    addClient(name: $name, email: $email, phone: $phone, address: $address) {
      _id,
      name,
      email,
      phone
    }
  }
`;
