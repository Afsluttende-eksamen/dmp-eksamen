import Button from "./Button";
import Link from "next/link";

export default function ListItem({ venue, location, date, ticketLink = "#" }) {
  return (
    <div className="pb-4 border-b grid grid-cols-[1fr_auto] items-center justify-between">

        <div>
          <h4>{venue}</h4>
          <p>
            {location} • {date}
          </p>
        </div>

        <Link className="ml-auto" href={ticketLink}>
          <Button variant="secondary"> KØB BILLET</Button>
        </Link>
      </div>
   
  );
}
