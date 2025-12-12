'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

export default function TourForside() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const content = contentRef.current;

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (mediaQuery.matches) {
   
      gsap.fromTo(
        imageContainer,
        {
          width: '40%',
          height: '60%',
          left: '5%',
          top: '50%',
          y: '-50%',
          borderRadius: '30px',
        },
        {
          width: '100%',
          height: '100%',
          left: '0%',
          top: '0%',
          y: '0%',
          borderRadius: '0px',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
          },
        }
      );

    
      gsap.to(content, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
      });
    }

   

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black overflow-hidden">
      <div
        ref={imageContainerRef}
        className="hidden md:block absolute overflow-hidden z-10"
      >
        <Image
          src="/images/img-beach.jpg"
          alt="img-beach"
          fill
          className="object-cover"
        />
      </div>
      <div
        ref={contentRef}
        className="relative z-20 min-h-screen flex items-center justify-center md:justify-end text-white px-4 md:px-8"
      >
        <div className="w-full max-w-2xl md:mx-20 py-16 md:py-0">
          <h2 className="mb-8 md:mb-12">
            TOURPLAN 2025
          </h2>
          <div className="space-y-4 mb-8">
            <div className="pb-4 border-b flex items-center gap-4 ">
             <h3>VEGA</h3>
              <h4>Copenhagen • 15. MAR</h4>
            </div>
            <div className="pb-4 border-b flex items-center gap-4 ">
              <h3>TRAIN</h3>
              <h4>Aarhus • 22. MAR</h4>
            </div>
            <div className="pb-4 border-b flex items-center gap-4 ">
              <h3>TRAIN</h3>
              <h4>Odense • 29. MAR</h4>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a href="/concerts">
              <Button variant="primary">SE ALLE KONCERTER</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}