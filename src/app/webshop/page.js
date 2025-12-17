import Navigation from "../components/layout/Navigation";
import { getProducts } from "@/lib/api/products";
import ProductCard from "../components/webshop/ProductCard";

export default async function Webshop() {
  const products = await getProducts();

  return (
    <div className=" bg-white">
      <div className="mx-8 ">
        <h1>MERCH</h1>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
