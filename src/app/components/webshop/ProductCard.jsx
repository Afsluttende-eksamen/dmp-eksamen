import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/app/components/webshop/AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="my-12 w-100 p-4 rounded-2xl hover:shadow-xl">
      <Link href={`/webshop/${product.slug}`}>
        <div className="flex justify-center">
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-md object-cover hover:scale-105"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
        <p className="text-sm text-gray-600">{product.description}</p>
      </Link>

      <div className="mt-3  flex items-center justify-between">
        <span className="font-semibold">{product.price} kr</span>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
