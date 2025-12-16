"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const textColor = isWhite ? "text-white " : "text-black";
  const homeColor = isHome ? "text-white " : textColor;

  const logoSrc =
    isWhite || isHome ? "/svg/dmp-logo-white.svg" : "/svg/dmp-logo-black.svg";
  const linkClass = ` rounded-xl text-nowrap hover:text-[#4F649B] hover:underline transition-all duration-300 ${homeColor} ${textColor}`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="">
        <div className="flex items-center justify-between lg:justify-evenly ">
          <div className="hidden lg:flex gap-[3dvw]">
            <Link href="/webshop" className={linkClass}>
              MERCH
            </Link>
            <Link href="/koncerter" className={linkClass}>
              KONCERTER
            </Link>
          </div>

          <div className="mx-4 lg:mx-14 min-h-[60px] min-w-10">
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

          <div className="hidden lg:flex gap-[3dvw] items-center justify-center">
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

          <div className="lg:hidden flex items-center ">
            <Link href="/kurv" className={textColor}>
              <CartIcon />
            </Link>
            <button
              className="flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className={` ${textColor}`}
                size="2x"
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
