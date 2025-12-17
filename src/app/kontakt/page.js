import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Button from "../components/ui/Button.jsx";

export default function Kontakt() {
  return (
    <div>
      <h1 className="text-center mb-8">KONTAKT</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 mb-8 max-w-6xl mx-auto px-4 md:px-0 gap-8 md:gap-0">
        <div className="md:border-r md:pr-8 ">
          <Image
            src="/images/img-suits.webp"
            alt="Billede af Danser Med Piger"
            width={600}
            height={1200}
            className=" rounded-3xl mx-auto w-full h-auto hidden md:block"
          />
        </div>

        <div className="flex flex-col gap-6 md:pl-8">
          <h2>Booking</h2>
          <h4>
            United Stage er det officielle bookingbureau for Danser Med Piger.
          </h4>

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

          <div>
            <h4>Priser</h4>
            <p className="max-w-[65ch]">
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
          <Button
            variant="primary"
            className="w-fit"
            href="https://unitedstage.dk/artister/danser-med-piger/"
            target="_blank"
          >
            GÅ TIL UNITED STAGE
          </Button>
          <br />
          <h2>Kontakt os</h2>
          <div>
            <h4>Send os en mail eller find os på sociale medier</h4>
            <Link
              href="mailto:info@dansermedpiger.dk"
              className="text-[#4F649B] hover:underline"
            >
              info@dansermedpiger.dk
            </Link>
            <div className="flex gap-3 mt-4">
              <Link href="https://www.facebook.com/p/Danser-Med-Piger-100075755391006/?locale=da_DK">
                <FaFacebook className="size-8 hover:text-[#4F649B] transition-colors" />
              </Link>
              <Link href="https://www.tiktok.com/@dansermedpiger">
                <FaTiktok className="size-8 hover:text-[#4F649B] transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/dansermedpiger/?hl=da">
                <FaInstagram className="size-8 hover:text-[#4F649B] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
