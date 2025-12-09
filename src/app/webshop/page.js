import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/layout/Navigation";
import { getProducts } from "@/lib/api/products";
import ProductCard from "../components/webshop/ProductCard";

export default async function Webshop() {
  const products = await getProducts();

  return (
    <div className=" bg-white">
      <Navigation />

      <div className="mx-12">

        <h1>MERCH</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
