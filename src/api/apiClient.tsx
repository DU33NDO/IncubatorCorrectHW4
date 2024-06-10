import axios from "axios";

const axiosProductsInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});
const axiosUploadItemInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/files/upload",
});

export { axiosProductsInstance, axiosUploadItemInstance };
