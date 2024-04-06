import React, { ChangeEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import Card from "../common/Card";

import { uploadPhoto } from "../../http/productPhotoService";

import {
  FORM_DATA_NAME_FILE,
  PHOTO_UPLOAD_PROGRESS_MESSAGE,
  PHOTO_UPLOAD_SUCCESS_MESSAGE,
  PHOTO_UPLOAD_ERROR_MESSAGE,
  NETWORK_ERROR_CODE,
  INTERNET_CONNECTION_ERROR_MESSAGE,
  TOAST_NOTIFICATION_DURATION,
} from "../../constants/app.constants";

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
      formData.append(FORM_DATA_NAME_FILE, event.target.files[0]);

      const { data: fileName } = await toast.promise(
        uploadPhoto(id, formData),
        {
          loading: PHOTO_UPLOAD_PROGRESS_MESSAGE,
          success: PHOTO_UPLOAD_SUCCESS_MESSAGE,
          error: PHOTO_UPLOAD_ERROR_MESSAGE,
        },
      );

      setUploadedPhotoFileName(fileName);

      // @ts-ignore
    } catch (axiosError: AxiosError) {
      if (axiosError.code === NETWORK_ERROR_CODE) {
        toast.error(INTERNET_CONNECTION_ERROR_MESSAGE);
      } else {
        toast.error(axiosError.response?.data);
      }
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: TOAST_NOTIFICATION_DURATION }}
      />
    </React.Fragment>
  );
};

export default ProductCard;
