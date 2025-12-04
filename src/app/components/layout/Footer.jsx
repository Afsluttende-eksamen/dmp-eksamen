import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" bg-black text-white w-[97dvw] mx-[1.5dvw] h-96 rounded-3xl flex flex-col   justify-center">
      <section className="flex-col mx-auto">
        <section className="flex  gap-[10dvw]  ">
          <div className="max-w-3xs ">
            <h4>Danser Med Piger</h4>
            <p>
              Dansk disco-pop band der bringer energi og stemning på scenen.
            </p>
            <div className="flex gap-3 ">
              <Link href="https://www.facebook.com/p/Danser-Med-Piger-100075755391006/?locale=da_DK">
                {" "}
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
            <Link href="/">Forside</Link>
            <Link href="/merch">Merch</Link>
            <Link href="/concerts">Koncerter</Link>
            <Link href="/follow-us">Følg os</Link>
          </div>

          <div className="flex flex-col">
            <h4>Kontakt & Booking</h4>
            <Link href="mailto:mail@dansermedpiger.dk">
              Mail: Mail@dansermedpiger.dk
            </Link>
            <Link href="https://unitedstage.dk/artister/danser-med-piger/">
              Booking via United Stage{" "}
            </Link>
          </div>
        </section>
        <hr className="my-10" />

        <p className=" mx-auto">
          © 2025 Danser med piger. Alle rettigheder forbeholdes
        </p>
      </section>
    </footer>
  );
};

export default Footer;
