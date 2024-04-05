import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import ProductCard from "../custom/ProductCard";

import PRODUCTS from "../../graphql/queries/productsQuery";

const WarehousePage: React.FC<PageProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { loading, error, data } = useQuery(PRODUCTS);

  useEffect(() => {
    if (!loading && !error) {
      setProducts(data.products);
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
