"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="mb-6 md:mb-12 pt-12">
        <Image
          src="/svg/dmp-logo-white.svg"
          alt="DMP Logo"
          width={200}
          height={200}
          className="opacity-50"
          priority
        />
      </div>
      <div>
        <Link
          href="https://unitedstage.dk/artister/danser-med-piger/"
          target="_blank"
        >
          <Button variant="secondary">BOOK VIA UNITED STAGE</Button>
        </Link>
      </div>
    </div>
  );
}
