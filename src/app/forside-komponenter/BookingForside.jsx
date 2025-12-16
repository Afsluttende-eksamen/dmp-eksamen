'use client';

import Image from 'next/image';
import Button from '../components/ui/Button';
import BookingItem from './BookingItem';
import Link from 'next/link';

export default function BookingForside() {
  return (
    <section className="bg-white grid md:grid-cols-2 gap-1 py-20 px-0 md:px-8">
      <div className="flex items-center justify-center md:justify-start px-4 md:px-8">
        <div className="py-0 md:py-16">
          <h2 className="mb-8 md:mb-12 md:text-left text-center">
            BOOK DANSER MED PIGER TIL
          </h2>
          <div className="flex flex-col pt-4 gap-6 mb-8">
            <BookingItem number="1" text="Koncerter og festivaler" />
            <BookingItem number="2" text="Firmafester og events" />
            <BookingItem number="3" text="Private arrangementer" />
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href="https://unitedstage.dk/artister/danser-med-piger/" target="_blank" rel="noreferrer">
              <Button variant="primary">KONTAKT NU</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">
        <Image
          src="/images/band-wagon.webp"
          alt="band-wagon"
          width={800}
          height={600}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}