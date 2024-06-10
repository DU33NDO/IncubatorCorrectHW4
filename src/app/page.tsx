import Image from "next/image";
import NavBar from "../components/NavBar";
import Product from "@/components/Product";
import ListOfProducts from "@/components/ListOfProduct";

export default function Home() {
  return (
    <div>
      <ListOfProducts/>
    </div>
  );
}
