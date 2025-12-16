"use client";
import Image from "next/image";
import Button from "../components/ui/Button";
import ListItem from "./ListItem";
import Link from "next/link";

export default function TourForside() {
  return (
    <section className=" bg-black grid md:grid-cols-2 gap-1 py-20 px-0 md:px-8">
      <div className="flex justify-center items-center p-8 ">
        <Image
          src="/images/img-beach.jpg"
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
          <div className="flex flex-col gap-6 mb-12">
            <ListItem
              venue="VEGA"
              location="København"
              date="15. MAR"
            />
            <ListItem venue="TRAIN" location="Aarhus" date="22. MAR" />
            <ListItem
              venue="TIVOLI"
              location="København"
              date="29. MAR"
            />
            <ListItem
              venue="STUDENTERHUSET"
              location="Aalborg"
              date="29. MAR"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/concerts">
              <Button variant="primary">SE ALLE KONCERTER</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
