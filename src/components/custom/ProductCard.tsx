import React from "react";

import Card from "../common/Card";

import noImage from "../../images/no-image.png";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, supplier, unit, photo, onStock } = product;

  const cardContents: KeyValuePair<string, string>[] = [
    { key: "supplierName", value: `Beszállító: ${supplier.name}` },
    { key: "onStock", value: `Raktáron: ${onStock} ${unit}` },
  ];

  return (
    <Card
      key={id}
      title={name}
      image={photo ? "" : noImage} // TODO: Later render the actual image of the product.
      imageAlt={name}
      contents={cardContents}
    />
  );
};

export default ProductCard;
