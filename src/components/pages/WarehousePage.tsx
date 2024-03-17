import React, { useState, useEffect } from "react";
import { DocumentNode } from "graphql/language";
import { useQuery, gql } from "@apollo/client";

import ProductCard from "../custom/ProductCard";

const WarehousePage: React.FC<PageProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // TODO: Move GraphQL query to separate file.
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
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (!loading && !error) {
      setProducts(data.getProducts);
    }
  }, [loading, error, data]);

  return (
    <section className="row">
      {products.map((product: Product) => (
        <article key={product.id} className="col-sm-12 col-md-6 col-lg-4">
          <ProductCard product={product} />
        </article>
      ))}
    </section>
  );
};

export default WarehousePage;
