import Button from "../ui/Button";

export default function ConcertCard({ date, venue, city, ticketLink }) {
  return (
    <div className=" text-white py-4">
      <div className="w-full  mb-6"></div>

      <div className="flex flex-col items-center text-center space-y-2 py-6">
        <h3 className="">{date}</h3>

        <p className="uppercase ">{venue}</p>

        <p className="">{city}</p>

        <div className="pt-4">
          <Button
            href={ticketLink}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            KØB BILLET
          </Button>
        </div>
      </div>
    </div>
  );
}
