import { gql } from "@apollo/client";
export const GET_CLIENTS=gql`
query getClients{
    clients{
        _id,
        name,
        email,
        phone
    }
}
`