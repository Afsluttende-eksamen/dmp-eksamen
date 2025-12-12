import Image from "next/image";
import Link from "next/link";

export default function Kontakt() {
  return (
    <div>
      <h1>Kontakt</h1>
      <section className="grid grid-cols-2 mb-8">
        <div className="border-r">
          <Image
            src="/images/img-suits.jpg"
            alt="DMP Logo"
            width={600}
            height={1200}
            className="rounded-3xl mx-auto"
          />
        </div>

        <div className="flex flex-col gap-7 mx-auto ">
          <h3>BOOKING</h3>
          <h4>
            United Stage er det officielle bookingbureau for Danser Med Piger.
          </h4>

          <h3>INFORMATION OM BOOKING</h3>

          <h4>Koncerter og festivaler:</h4>
          <div>
            <p>
              <b>Chillie Bruun Andersen</b>
              <br></br>
              Booking Agent
            </p>
            <Link
              href="mailto:chillie@unitedstage.dk"
              className="text-[#4F649B] hover:underline"
            >
              chillie@unitedstage.dk
            </Link>
          </div>
          <h4>Firmafester og events:</h4>
          <div>
            <p>
              <b>Jeppe Birch</b>
              <br></br>
              Nordic Director, Corporate Events
            </p>
            <Link
              href="mailto:jeppe@unitedstage.dk"
              className="text-[#4F649B] hover:underline"
            >
              jeppe@unitedstage.dk
            </Link>
          </div>

          <h4>Priser</h4>
          <div>
            <p>
              Prisen afhænger af arrangementets omfang. Ring til United Stage og
              få svar på dine spørgsmål.
            </p>
            <Link
              href="tel:+4533979010"
              className="text-[#4F649B] hover:underline"
            >
              +45 33 97 90 10
            </Link>
          </div>
          <h3>ANDET</h3>
          <Link
            href="mailto:info@dansermedpiger.dk"
            className="text-[#4F649B] hover:underline"
          >
            info@dansermedpiger.dk
          </Link>
        </div>
      </section>
    </div>
  );
}
