import Image from "next/image";
import Footer from "../components/layout/Footer";
import ConcertList from "../components/koncerter/ConcertList";
import Navigation from "../components/layout/Navigation";

export default function Concerts() {
  const concerts = [
    {
      date: "7. JUNI",
      venue: "MUSIK I ØSTERSKOVEN",
      city: "HOBRO",
      ticketLink: "#"
    },
    {
      date: "14. JUNI",
      venue: "VEGA",
      city: "KØBENHAVN",
      ticketLink: "#"
    },
    {
      date: "21. JUNI",
      venue: "TRAIN",
      city: "AARHUS",
      ticketLink: "#"
    },
    {
      date: "28. JUNI",
      venue: "STUDENTERHUSET",
      city: "AALBORG",
      ticketLink: "#"
    },
    {
      date: "5. JULI",
      venue: "GIMLE",
      city: "ROSKILDE",
      ticketLink: "#"
    },
    {
      date: "12. JULI",
      venue: "ATLAS",
      city: "AARHUS",
      ticketLink: "#"
    }
  ];

  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/koncerter-bg.jpg"
          alt="Concert crowd"
          width={1920}
          height={1080}
          className="object-cover"
        />
   
      </div>

 
      <div className="relative z-20">
        <Navigation variant="white" />
      </div>

    
      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-10">
     
        <h1 className="text-black lg:leading-35 md:leading-25 leading-20 text-center mb-12">
          KOMMENDE KONCERTER
        </h1>
        
 
        <div className="w-full">
          <ConcertList concerts={concerts} />
        </div>
      </section>


      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}