import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PRODUCTS: DocumentNode = gql`
  query {
    products {
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

export default PRODUCTS;
