"use client";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  axiosUploadItemInstance,
  axiosProductsInstance,
} from "@/api/apiClient";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const queryClient = useQueryClient();

  const addProductMutation = useMutation(
    async (productData: {
      title: string;
      price: number;
      description: string;
      category: string;
      images: string[];
    }) => {
      await axiosProductsInstance.post("/", productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        alert("Product added successfully!");
      },
      onError: (error) => {
        console.error("Error adding the product", error);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productData = {
      title,
      price,
      description,
      category,
      images: photoUrls,
    };
    await addProductMutation.mutateAsync(productData);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files as FileList);
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axiosUploadItemInstance.post("/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        uploadedUrls.push(response.data.location);
      } catch (error) {
        console.error("Error uploading the photo", error);
      }
    }

    setPhotoUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
  };

  return (
    <div className="text-black mt-20 mb-20">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-14 items-center">
          <p className="text-3xl font-bold text-white">ADDING POST</p>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-3 w-80"
          />
          <input
            type="number"
            placeholder="Price"
            min={0}
            max={10000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="px-3 py-3 w-80"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 py-3 w-80"
          />
          <div className="text-white px-3 py-3">
            <input
              type="radio"
              id="categoryElectronics"
              name="category"
              value="electronics"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="categoryElectronics"> Electronics</label>
            <br />
            <input
              type="radio"
              id="categoryJewelery"
              name="category"
              value="jewelery"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="categoryJewelery">Jewelery</label>
            <br />
            <input
              type="radio"
              id="categoryMenClothing"
              name="category"
              value="men's clothing"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="categoryMenClothing"> Men clothing</label>
            <br />
            <input
              type="radio"
              id="categoryWomenClothing"
              name="category"
              value="women's clothing"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="categoryWomenClothing"> Women clothing</label>
          </div>
          <div className="flex justify-center">
            <input
              className="px-5 py-5 border-2 border-white bg-black"
              type="file"
              multiple
              onChange={handlePhotoUpload}
            />
          </div>
          <button
            type="submit"
            className="text-white border-2 border-white px-5 py-2 rounded-3xl"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
