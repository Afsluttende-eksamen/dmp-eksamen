"use client";
import Image from "next/image";
import Button from "../ui/Button";
import ListItem from "./ListItem";
import Link from "next/link";
import { concerts } from "@/lib/data/concerts";

export default function BackgroundSection() {
  const upcomingConcerts = concerts.slice(0, 4);

  return (
    <section className="relative py-20 px-4 md:px-8">
      {/* Baggrundsbillede */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-beach.webp"
          alt="Background"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover"
        />
        {/* Mørk overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Indhold */}
      <div className="relative z-10 flex items-center justify-center text-white max-w-4xl mx-auto">
        <div className="py-8 md:py-16 text-left">
          <h2 className="mb-8 md:mb-12">TOURPLAN 2025</h2>
          <div className="flex flex-col pt-4 gap-6 mb-12">
            {upcomingConcerts.map((concert, i) => (
              <ListItem
                key={i}
                venue={concert.venue}
                location={concert.city}
                date={concert.date}
              />
            ))}
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/koncerter">
              <Button variant="primary">ALLE KONCERTER</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
