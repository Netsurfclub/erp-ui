import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const CREATE_PRODUCT: DocumentNode = gql`
  mutation createProduct($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      supplier {
        id
        name
        phone
        email
      }
      price
      onStock
      unit
      photo
    }
  }
`;

export default CREATE_PRODUCT;
