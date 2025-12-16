"use client";
import Image from "next/image";
import Button from "../components/ui/Button";
import ListItem from "./ListItem";
import Link from "next/link";
import { concerts } from "@/lib/data/concerts";

export default function TourForside() {
  const upcomingConcerts = concerts.slice(0, 4);

  return (
    <section className="bg-black grid md:grid-cols-2 gap-1 py-20 px-0 md:px-8">
      <div className="flex justify-center items-center p-8">
        <Image
          src="/images/img-beach.webp"
          alt="img-beach"
          width={800}
          height={600}
          className="rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-center md:justify-end text-white px-4 md:px-8">
        <div className="py-8 md:py-16">
          <h2 className="mb-8 md:mb-12 md:text-left text-center">
            TOURPLAN 2025
          </h2>
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
