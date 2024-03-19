import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import ProductCard from "../custom/ProductCard";

import GET_PRODUCTS from "../../graphql/queries/getProductsQuery";

const WarehousePage: React.FC<PageProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
