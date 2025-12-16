


import Image from "next/image";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import MediaGrid from "../components/media/MediaGrid";
import MediaSlot from "../components/media/MediaSlot";

export default function Gallery() {
  return (
    <div className="bg-white">

      
      <div className="mx-4 sm:mx-8 md:mx-20 py-16">
        <div className="text-center mb-12">
          <h1>GALLERI</h1>
          <h2 className="text-black/80">Øjeblikke fra scenen og bag kulisserne</h2>
        </div>

     
          <h3 className="py-6 md:pt-16">Studio</h3>
        <MediaGrid>
          <MediaSlot size="large">
            <Image
              src="/images/bornholm/bornholm-studio-5-h.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/img-2.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/bornholm/bornholm-studio-2-h.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>

        <h3 className="py-6 md:pt-16"> Sommeren '25 </h3>

        {/* Sektion 2 - Stort billede til HØJRE */}
        <MediaGrid>
          <MediaSlot>
            <Image
              src="/images/img-6.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot size="large">
            <Image
              src="/images/bornholm/bornholm-4-w.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/img-7.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>

         <h2 className="py-6 md:pt-16"> Live fra Tivoli</h2>

          {/* Sektion 1 - Stort billede til VENSTRE */}
        <MediaGrid>
          <MediaSlot size="large">
            <Image
              src="/images/img-1.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/img-2.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/img-4.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>

        <h2 className="py-6 md:pt-16"> Live fra Tivoli</h2>

        {/* Sektion 2 - Stort billede til HØJRE */}
        <MediaGrid>
          <MediaSlot>
            <Image
              src="/images/img-5.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot size="large">
            <Image
              src="/images/img-7.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/img-7.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
      </div>

    
    </div>
  );
}
