import React, { ChangeEvent, useState } from "react";

import Card from "../common/Card";

import { uploadPhoto } from "../../http/productPhotoService";

import noImage from "../../images/no-image.png";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const formData = new FormData();
      formData.append("file", event.target.files[0]);

      const { data: fileName } = await uploadPhoto(id, formData);

      setUploadedPhotoFileName(fileName);
    } catch (error) {
      console.error(error); // TODO: Later add descriptive error message on the UI.
    }
  };

  const { id, name, supplier, unit, photo: photoFileName, onStock } = product;
  const { name: supplierName } = supplier;

  let image;

  if (photoFileName) {
    image = `${process.env.REACT_APP_PHOTO_RETRIEVE_ENDPOINT}/${photoFileName}`;
  } else if (uploadedPhotoFileName) {
    image = `${process.env.REACT_APP_PHOTO_RETRIEVE_ENDPOINT}/${uploadedPhotoFileName}`;
  } else {
    image = noImage;
  }

  return (
    <Card
      key={id}
      title={name}
      image={image}
      imageAlt={name}
      contents={[
        { key: 1, value: `Beszállító: ${supplierName}` },
        { key: 2, value: `Raktáron: ${onStock} ${unit}` },
      ]}
      onChange={handlePhotoUpload}
    />
  );
};

export default ProductCard;
