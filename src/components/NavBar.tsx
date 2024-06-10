import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-10 items-center mt-10">
        <p className="text-5xl font-bold text-[#5437f3]">K-OLX</p>
        <div className="flex gap-10">
          <Link href={"/"}>
            <p className="text-xl text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
              Home
            </p>
          </Link>
          <Link href={"/AddProduct"}>
            <p className="text-xl text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
              Add Product
            </p>
          </Link>
          <p className="text-xl text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
            Creators
          </p>
          <p className="text-xl text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
            Collection
          </p>
        </div>
        <Link href={"/LogIn"}>
          <p className="text-2xl font-bold text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
            Log in
          </p>
        </Link>
        <Link href={"/LogOut"}>
          <p className="text-2xl font-bold text-[#fff] hover:text-[#5437f3] ease-out duration-300 cursor-pointer">
            Log out
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
