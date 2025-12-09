"use client";

import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart || []);
  const quantity = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  return (
    <div
      className="grid grid-cols-2 grid-rows-4 w-max "
      aria-hidden={quantity === 0}
    >
      <FaShoppingCart
        className="col-start-1 row-span-2 row-start-2 justify-self-center self-center size-8 hover:text-[#4F649B] transition-colors duration-300"
        aria-hidden="true"
      />

      {quantity > 0 && (
        <span
          className=" col-start-1 col-span-2 row-start-1 row-span-2 min-w-5 min-h-5 justify-self-center self-center  rounded-[100%] bg-red-600 text-white text-[12px] box-border pointer-events-none flex items-center justify-center"
          aria-label={`Cart items: ${quantity}`}
        >
          {quantity > 99 ? "99+" : quantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
