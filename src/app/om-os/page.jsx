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
      <Spotify />
    </div>
  );
}
