import Image from "next/image";
import ConcertList from "../components/koncerter/ConcertList";
import Navigation from "../components/layout/Navigation";
import { concerts } from "@/lib/data/concerts";

export default function Concerts() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/koncerter-bg.webp"
          alt="Concert crowd"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-20">
        <Navigation variant="white" />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-black mb-12 ">KOMMENDE KONCERTER</h1>

        <div className="w-full">
          <ConcertList concerts={concerts} />
        </div>
      </section>
    </div>
  );
}
