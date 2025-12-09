'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      imageContainer,
      {
        width: '40%',
        height: '60%',
        right: '5%',
        top: '50%',
        y: '-50%',
        borderRadius: '30px',
      },
      {
        width: '100%',
        height: '100%',
        right: '0%',
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className=" h-screen bg-white overflow-hidden">
      <div
        ref={imageContainerRef}
        className="absolute overflow-hidden z-1000"
      >
        <Image
          src="/images/img-beach.jpg"
          alt=""
          fill
          className="object-cover "
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center"
      >
        <div className="mx-10 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">
                DANSER MED PIGER
              </h2>
              <p className=" mb-8">
                Vil du booke os til dit næste arrangement? Eller har du bare lyst til at sige hej? Kontakt os, så vender vi tilbage hurtigst muligt.
              </p>
              <a href="/contact">
                <Button variant="primary">KONTAKT OS NU</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
