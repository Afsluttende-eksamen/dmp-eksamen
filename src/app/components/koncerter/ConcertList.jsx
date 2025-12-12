import ConcertCard from "./ConcertCard";

export default function ConcertList({ concerts }) {
  return (
    <section className="w-auto px-4 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
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
