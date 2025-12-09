import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/layout/Navigation";
import { getProducts } from "@/lib/api/products";

export default async function Webshop() {
  const products = await getProducts();

  return (
    <div className=" bg-white">
      <Navigation />

      <h1>MERCH</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/webshop/${product.id}`}>
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={300}
              height={300}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
