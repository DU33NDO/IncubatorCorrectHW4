"use client";
import React, { useEffect, useState } from "react";
import Product, { IProduct } from "./Product";
import { useQuery } from "react-query";
import axios from "axios";
import { getAllProducts } from "@/api/services/productsService";

const fetchProducts = async () => {
  const response = await getAllProducts();
  return response.data;
};

export default function ListOfProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>("products", fetchProducts);

  if (isLoading) {
    return <div className="px-60 mt-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="px-60 mt-20">
        An error occurred: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-20 mt-20 justify-center">
      {products &&
        products.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
