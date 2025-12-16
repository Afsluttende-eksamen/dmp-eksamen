import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white w-[97dvw] mx-[1.5dvw] min-h-96 py-12 rounded-t-3xl flex flex-col justify-center px-4 md:px-8">
      <section className="flex-col mx-auto">
        <section className="flex flex-col md:flex-row gap-8 md:gap-[10dvw] text-center md:text-left">
          <div className="max-w-xs md:max-w-3xs">
            <h4>Danser Med Piger</h4>
            <p>
              Dansk disco-pop band der bringer energi og stemning på scenen.
            </p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <Link href="https://www.facebook.com/p/Danser-Med-Piger-100075755391006/?locale=da_DK">
                <FaFacebook className="size-8" />
              </Link>
              <Link href="https://www.tiktok.com/@dansermedpiger">
                <FaTiktok className="size-8" />
              </Link>
              <Link href="https://www.instagram.com/dansermedpiger/?hl=da">
                <FaInstagram className="size-8" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4>Hurtige links</h4>
            <Link className="hover:underline" href="/">
              Forside
            </Link>
            <Link className="hover:underline" href="/merch">
              Merch
            </Link>
            <Link className="hover:underline" href="/concerts">
              Koncerter
            </Link>
            <Link className="hover:underline" href="/follow-us">
              Følg os
            </Link>
          </div>

          <div className="flex flex-col">
            <h4>Kontakt & Booking</h4>
            <Link
              className="hover:underline"
              href="mailto:mail@dansermedpiger.dk"
            >
              Mail: Mail@dansermedpiger.dk
            </Link>
            <Link
              className="hover:underline"
              href="https://unitedstage.dk/artister/danser-med-piger/"
            >
              Booking via United Stage{" "}
            </Link>
          </div>
        </section>
        <hr className="my-10" />

        <p className="mx-auto text-center">
          © 2025 Danser med piger. Alle rettigheder forbeholdes
        </p>
      </section>
    </footer>
  );
};

export default Footer;
