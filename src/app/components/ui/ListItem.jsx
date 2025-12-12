import Button from './Button';
import Link from 'next/link';

export default function ListItem({ venue, location, date, ticketLink ="#", }) {
  return (
    <div className="pb-4 border-b grid grid-cols-3 items-center justify-between">
      <h4>{venue}</h4>
      <p>{location} • {date}</p>

        <Link className='ml-auto' href={ticketLink}>
          <Button variant='secondary'> KØB BILLET</Button>
        </Link>

    </div>
  );
}
