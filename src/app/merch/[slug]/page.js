import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/components/webshop/AddToCartButton";
import { getProductBySlug } from "@/lib/api/products";

import { useCartStore } from "@/store/cartStore";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  return (
    <div className="  bg-white">
      <div className="my-20 mx-8">
        <Link href="/webshop" className="text-sm hover:underline">
          ← Tilbage til merch
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="w-full">
            <div className=" flex justify-center">
              <Image
                src={product.thumbnail}
                alt={product.name}
                width={500}
                height={500}
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h3>{product.name}</h3>
            <p className="mt-3">{product.price},-</p>
            <div className="mt-6 flex items-center">
              <AddToCartButton product={product} />
            </div>
            <div className="mt-6">
              <p>Beskrivelse: {product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
