import ConcertCard from "./ConcertCard";

export default function ConcertList({ concerts }) {
  return (
    <section className="w-auto px-4 ">
      <div className="flex flex-col gap-8 p-6 rounded-2xl">
        {concerts.map((concert, index) => (
          <ConcertCard
            key={index}
            date={concert.date}
            venue={concert.venue}
            city={concert.city}
            ticketLink={concert.ticketLink}
          />
        ))}
      </div>
    </section>
  );
}
