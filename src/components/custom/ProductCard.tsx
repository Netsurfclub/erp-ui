import React, { ChangeEvent, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import Card from "../common/Card";

import { uploadPhoto } from "../../http/productPhotoService";

import "react-toastify/dist/ReactToastify.css";

import noImage from "../../images/no-image.png";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const formData = new FormData();
      formData.append("file", event.target.files[0]);

      const { data: fileName } = await uploadPhoto(id, formData);

      setUploadedPhotoFileName(fileName);

      // @ts-ignore
    } catch (axiosError: AxiosError) {
      toast.error(axiosError.response?.data, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
    <React.Fragment>
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
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default ProductCard;
