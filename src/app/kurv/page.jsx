"use client";
import Navigation from "../components/layout/Navigation";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../components/ui/Button";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [clearState, setClearState] = useState(0);

  const total = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  const handleClearCartClick = () => {
    setClearState((state) => (state === 1 ? 0 : 1));
  };

  const handleJa = () => {
    clearCart();
    setClearState(0);
  };

  const handleNej = () => {
    setClearState(0);
  };

  return (
    <div>
      <Navigation />
      <h1 className="place-self-center">KURV</h1>
      <div className="max-w-4xl mx-auto mb-10">
        {cart.length === 0 ? (
          <p className="text-gray-500">Kurven er tom</p>
        ) : (
          <div className="flex flex-col  relative">
            <div className="border-b grid grid-cols-4 place-items-center">
              <h4>PRODUKT</h4>

              <h4>PRIS</h4>

              <h4>ANTAL</h4>
              <h4>I ALT</h4>
            </div>
            {cart.map((product) => (
              <div
                key={product.slug}
                className="grid grid-cols-4  items-center  border-b pb-4"
              >
                <div>
                  <div className="flex  justify-between">
                    <Link
                      href={`/webshop/${product.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        width={350}
                        height={350}
                        className="object-cover rounded-xl my-4 w-35 "
                      />
                    </Link>

                    <div className="flex-1 self-center">
                      <Link href={`/webshop/${product.slug}`}>
                        <h4 className="text-2xl font-bold">{product.name}</h4>

                        <p className="text-gray-500">{product.color}</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">{product.price} DKK</div>
                <div className="mx-auto">{product.quantity}</div>
                <div className="mx-auto">
                  <p>{product.quantity * product.price} DKK</p>
                </div>
                {/* <button
                  onClick={() => removeFromCart(product.id)}
                  className="cursor-pointer mt-2 hover:underline col-end-6"
                >
                  <IoCloseOutline className="size-9" />
                </button> */}
              </div>
            ))}

            <div>
              <div className="flex justify-between p-1.5">
                <h4 className="font-semibold ">TOTAL </h4>

                <p>{total} DKK</p>
              </div>
              <div className="flex justify-between p-1.5">
                <p className="font-semibold">
                  Inklusiv {((total / 100) * 20).toFixed(2)} kr. i afgifter.
                  Rabatter og levering beregnes ved betaling.
                </p>
                <button
                  onClick={handleClearCartClick}
                  className=" cursor-pointer bg-red-700 text-white font-semibold px-4 py-2 rounded-3xl hover:bg-red-800 transition inline-block w-fit "
                >
                  Tøm kurven
                </button>

                {clearState === 1 && (
                  <div className="absolute top-3/5 mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl border border-gray-300 shadow-lg p-4  w-64 z-10">
                    <p className="text-center mb-4 font-medium">
                      Er du sikker på, at du vil tømme kurven?
                    </p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={handleJa}
                        className="bg-red-700 text-white px-3 py-1 rounded-3xl hover:bg-red-800 transition"
                      >
                        Ja
                      </button>
                      <button
                        onClick={handleNej}
                        className="bg-gray-300 text-gray-800 px-3 py-1 rounded-3xl hover:bg-gray-400 transition"
                      >
                        Nej
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="bg-black rounded-xl text-white font-semibold hover:bg-sky-800 px-4 py-2 cursor-pointer">
                Gå til betaling
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
