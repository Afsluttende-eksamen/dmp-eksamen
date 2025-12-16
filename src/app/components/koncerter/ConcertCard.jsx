import Button from "../ui/Button";

export default function ConcertCard({ date, venue, city, ticketLink }) {
  return (
    <div className="flex flex-col md:flex-row justify-between text-center items-center bg-black text-white py-8 px-16 rounded-3xl">
      <h2 className=" md:text-2xl">{venue}</h2>
      <h4 className="text-white">{date}</h4>
      <h3 className="text-white">{city}</h3>
      <div className="mt-6 md:mt-0">
      <Button href={ticketLink}>KØB BILLET</Button>
      </div>
    </div>
  );
}
