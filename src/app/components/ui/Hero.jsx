"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollIndicatorRef.current, {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="mb-12">
        <Image
          src="/svg/dmp-logo-white.svg"
          alt="DMP Logo"
          width={200}
          height={200}
          className="opacity-50"
        />
      </div>
      <div>
        <Link href="https://www.unitedstage.dk/artist/danser-med-piger/">
          <Button variant="secondary">BOOK VIA UNITED STAGE</Button>
        </Link>
      </div>
    </div>
  );
}
