'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
      ease: 'power1.inOut',
    });
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div  className="mb-12 ">
          <Image
            src="/svg/dmp-logo-white.svg"
            alt="DMP Logo"
            width={200}
            height={200}
            className="opacity-50"
          />
        </div>
        <div  className=" ">
          <Button variant="primary">BOOK VIA UNITED STAGE</Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        ref={scrollIndicatorRef}
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-sm">Se mere</span>
        <div className="w-px h-12 bg-white"></div>
      </button>
    </>
  );
}
