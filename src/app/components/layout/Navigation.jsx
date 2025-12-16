"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../cart/CartIcon";
import { useState } from "react";

const Navigation = ({ variant = "black" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWhite = variant === "white";
  const textColor = isWhite ? "text-white" : "text-black";
  const logoSrc = isWhite
    ? "/svg/dmp-logo-white.svg"
    : "/svg/dmp-logo-black.svg";
  const linkClass = `px-6 rounded-xl hover:text-[#4F649B] hover:underline transition-all duration-300 ${textColor}`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-1">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex gap-12">
            <Link href="/webshop" className={linkClass}>
              MERCH
            </Link>
            <Link href="/koncerter" className={linkClass}>
              KONCERTER
            </Link>
          </div>

          <div className="mx-4 lg:mx-16">
            <Link href="/" className="group relative">
              <Image
                src={logoSrc}
                alt="DMP Logo"
                width={78}
                height={78}
                className="group-hover:opacity-0"
              />
              <Image
                src="/svg/dmp-logo-soul.svg"
                alt="DMP Logo"
                width={78}
                height={78}
                className="absolute inset-0 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-[1.5]"
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-12 items-center justify-center">
            <Link href="/om-os" className={linkClass}>
              OM OS
            </Link>
            <Link href="/kontakt" className={linkClass}>
              KONTAKT
            </Link>
            <Link href="/kurv" className={textColor}>
              <CartIcon />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <Link href="/kurv" className={textColor}>
              <CartIcon />
            </Link>
            <button
              className="flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className={`size-6 ${textColor}`}
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/webshop"
              className={linkClass}
              onClick={handleLinkClick}
            >
              MERCH
            </Link>
            <Link
              href="/koncerter"
              className={linkClass}
              onClick={handleLinkClick}
            >
              KONCERTER
            </Link>
            <Link href="/om-os" className={linkClass} onClick={handleLinkClick}>
              OM OS
            </Link>
            <Link
              href="/kontakt"
              className={linkClass}
              onClick={handleLinkClick}
            >
              KONTAKT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
