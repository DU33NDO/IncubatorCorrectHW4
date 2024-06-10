import React from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductForAdd {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="group relative">
        <img
          src={product.image}
          alt="product photo"
          className="w-[300px] h-[300px] rounded-2xl group-hover:opacity-50 transition-opacity duration-300 product-image"
        />
        <div className="bg-[#a43376] absolute inset-x-0 bottom-0 left-[-30px] w-[350px] -bottom-20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col px-6 py-4 gap-4">
            <div className="flex justify-between">
              <p className="text-black text-xl font-bold w-[60%] truncate max-w-[10ch]">
                {product.title}
              </p>
              <p className="text-black text-xl font-bold">
                {product.price} tenge
              </p>
            </div>
            <p className="text-xl text-black">{product.category}</p>
            <button className="bg-[#5437f3] text-white px-10 py-2 rounded-xl text-xl">
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
