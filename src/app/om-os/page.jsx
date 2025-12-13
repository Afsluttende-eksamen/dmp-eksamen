import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Spotify from "../components/some/Spotify";

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <h2 className="text-center">OM OS </h2>
      <Image
        src="/images/img-omhero.jpeg"
        alt="Description of image"
        width={1728}
        height={946}
        className="size-4/5 mx-auto"
      />
      <p className="max-w-[65ch]">
        Vi er fem venner, der har delt kærligheden for musik siden barndommen.
        Vi voksede op med instrumenter i hænderne og et øvelokale, der hurtigt
        blev vores andet hjem. Gennem årene har venskabet været fundamentet for
        vores lyd - ærlig, energisk og fyldt med den glæde, der opstår, når man
        spiller musik med mennesker, man kender ud og ind. For os handler musik
        ikke kun om toner og tekster, men om fællesskab, nærvær og de øjeblikke,
        der opstår mellem publikum og band. Vi laver musik, fordi vi ikke kan
        lade være, og fordi det stadig føles lige så rigtigt, som da vi spillede
        vores første akkorder sammen.{" "}
      </p>
      <Spotify />
    </div>
  );
}
