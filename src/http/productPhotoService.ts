import axios, { AxiosResponse } from "axios";

const uploadPhoto = (
  productId: number,
  formData: FormData,
): Promise<AxiosResponse> => {
  return axios.post(
    `${process.env.VITE_PHOTO_UPLOAD_ENDPOINT}/${productId}`,
    formData,
  );
};

export { uploadPhoto };
