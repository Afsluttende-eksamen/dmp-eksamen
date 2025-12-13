import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Spotify from "../components/some/Spotify";
import SoMeEmbed from "../components/some/SoMeEmbed";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <h1 className="text-center ">OM OS </h1>
      <Image
        src="/images/img-omhero.jpeg"
        alt="Description of image"
        width={1728}
        height={946}
        className="size-4/5 mx-auto"
      />
      <div>
        <p className="max-w-[65ch] mx-auto">
          Vi er fem venner, der har delt kærligheden for musik siden barndommen.
          Vi voksede op med instrumenter i hænderne og et øvelokale, der hurtigt
          blev vores andet hjem. Gennem årene har venskabet været fundamentet
          for vores lyd - ærlig, energisk og fyldt med den glæde, der opstår,
          når man spiller musik med mennesker, man kender ud og ind. For os
          handler musik ikke kun om toner og tekster, men om fællesskab, nærvær
          og de øjeblikke, der opstår mellem os og publikum. Vi laver musik,
          fordi vi elsker det, og fordi det stadig føles lige så rigtigt, som da
          vi spillede vores første akkorder sammen.{" "}
        </p>

        <Image
          src="/svg/dmp2.svg"
          alt="Description of image"
          width={400}
          height={370}
          className="mx-auto my-8"
        />
      </div>

      {/* <div className="text-center my-8">
        <h4 className="py-4 ">Kom og fest med os!</h4>
        <Button variant="primary" href="/koncerter">
          Se koncerter
        </Button>
      </div> */}

      <h3 className="pb-8">Se hvad der sker bag scenen</h3>
      <div>
        <SoMeEmbed />
      </div>
      {/* <div className="text-center my-10">
        <h3>Lyt til vores musik</h3>
        <Spotify />
      </div> */}
    </div>
  );
}
