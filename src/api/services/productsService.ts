import { axiosProductsInstance } from "./apiClient";

const getAllProducts = () => {
  return axiosProductsInstance.get("/products");
};

const getProductById = (id: number) => {
  return axiosProductsInstance.get(`/products/${id}`);
};

const createProduct = (productData: any) => {
  return axiosProductsInstance.post("/products", productData);
};

const updateProduct = (id: number, productData: any) => {
  return axiosProductsInstance.put(`/products/${id}`, productData);
};

const deleteProduct = (id: number) => {
  return axiosProductsInstance.delete(`/products/${id}`);
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
