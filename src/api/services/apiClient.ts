// services/apiClient.ts
import axios from "axios";

const axiosProductsInstance = axios.create({
  baseURL: "https://fakestoreapi.com",  
});

export { axiosProductsInstance };
