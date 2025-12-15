"use client";

import { useCartStore } from "@/store/cartStore";
import Button from "../ui/Button";

const AddToCartButton = ({ product, className = "" }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      variant="primary"
      onClick={() => {
        addToCart(product);
      }}
      className={` font-semibold px-4 py-2 rounded-3xl mt-2  transition ${className}`}
    >
      Læg i kurven
    </Button>
  );
};

export default AddToCartButton;
