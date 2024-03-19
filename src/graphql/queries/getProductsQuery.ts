import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const GET_PRODUCTS: DocumentNode = gql`
  query {
    getProducts {
      id
      name
      supplier {
        name
      }
      price
      unit
      photo
      onStock
    }
  }
`;

export default GET_PRODUCTS;
