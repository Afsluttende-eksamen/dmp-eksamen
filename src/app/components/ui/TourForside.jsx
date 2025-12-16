'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Button from './Button';
import ListItem from './ListItem';
import Link from 'next/link';



export default function TourForside() {
 

  return (
    <section className=" bg-black grid md:grid-cols-2 gap-1 py-20">
      <div className="flex justify-center items-center p-8 ">
        <Image
          src="/images/img-beach.jpg"
          alt="img-beach"
          width={800}
          height={600}
          className='rounded-2xl'
        />
      </div>
      <div className="  flex items-center justify-center md:justify-end text-white px-4 md:px-8">
        <div className="w-full max-w-2xl  py-16">
          <h2 className="mb-8 md:mb-12 md:text-left text-center">
            TOURPLAN 2025
          </h2>
          <div className="flex flex-col gap-6 mb-12">
            <ListItem 
              venue="VEGA" 
              location="Copenhagen" 
              date="15. MAR" 
              ticketLink="#"
             
            />
            <ListItem 
              venue="TRAIN" 
              location="Aarhus" 
              date="22. MAR"
            />
            <ListItem 
              venue="STUDENTERHUSET" 
              location="Aalborg" 
              date="29. MAR"
            />
            <ListItem 
              venue="STUDENTERHUSET" 
              location="Aalborg" 
              date="29. MAR"
            />
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