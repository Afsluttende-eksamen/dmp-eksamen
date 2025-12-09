import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/app/components/webshop/AddToCartButton";
import CartIcon from "@/app/components/cart/CartIcon";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbzvkDaCSaY8XlmCI14PxcahsWYTwLrRdOQVb29cBPCl4TJfDmbRmvP_B7E4N3C3YDMR/exec"
  );
  const products = await res.json();

  let product = null;
  products.forEach((p) => {
    if (`${p.id}` === id) {
      product = p;
    }
  });

  return (
    <div className=" bg-white">
      <div>
        <Link href="/webshop">← Tilbage til merch</Link>

        <h1>{product.name}</h1>
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={500}
          height={500}
        />
        <p>{product.description}</p>
        <p>{product.price} kr</p>
        <AddToCartButton product={product}></AddToCartButton>
      </div>
    </div>
  );
};

export default ProductPage;
