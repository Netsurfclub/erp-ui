import React from "react";

import ProductCard from "../custom/ProductCard";

const WarehousePage: React.FC<PageProps> = () => {
  // TODO: Clean up mock data after GraphQL backend is set up.
  const products: Product[] = [
    {
      id: 1,
      name: "6-os csavar",
      supplierName: "ACME Corp.",
      price: 150,
      unit: "darab",
      photo: null,
      onStock: 1000,
    },
    {
      id: 2,
      name: "6-os csavar alátét (sima)",
      supplierName: "ACME Corp.",
      price: 20,
      unit: "darab",
      photo: null,
      onStock: 1000,
    },
    {
      id: 3,
      name: "6-os csavar alátét (rugós)",
      supplierName: "ACME Corp.",
      price: 25,
      unit: "darab",
      photo: null,
      onStock: 1000,
    },
  ];

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
