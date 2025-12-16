


import Image from "next/image";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import MediaGrid from "../components/media/MediaGrid";
import MediaSlot from "../components/media/MediaSlot";

export default function Gallery() {
  return (
    <div className="bg-white">

      
      <div className="mx-4 sm:mx-8 md:mx-20 py-16">
        <div className="text-center mb-0">
          <h1>GALLERI</h1>
        </div>

             <h3 className="py-6">Live</h3>
       <MediaGrid>
          <MediaSlot>
            <Image
              src="/images/live/live-8.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot size="large">
            <Image
              src="/images/live/live-cool.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/live/live-9.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
          <div className="my-6"></div>
        <MediaGrid>
          <MediaSlot size="large">
            <Image
              src="/images/live/live-2.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover object-[50%_20%]  hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/live/live-1.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/live/live-7.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
          <div className="my-6"></div>
          <MediaGrid>
          <MediaSlot>
            <Image
              src="/images/live/live-5.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover  hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot size="large">
            <Image
              src="/images/live/live-4.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover object-[50%_20%] hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/live/live-6.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
          <h3 className="py-6 md:pt-16">Studio</h3>
        <MediaGrid>
          <MediaSlot size="large">
            <Image
              src="/images/studio/bornholm-studio-w.webp"
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
              src="/images/studio/bornholm-studio-2-h.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
          <div className="my-6"></div>
          <MediaGrid>
          <MediaSlot>
            <Image
              src="/images/studio/bornholm-studio-3-h.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot size="large">
            <Image
              src="/images/studio/bornholm-studio-4-h.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/studio/bornholm-studio-h.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>

        <h3 className="py-6 md:pt-16"> Sommeren '25 </h3>

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
           <div className="my-6"></div>
        <MediaGrid>
          <MediaSlot size="large">
            <Image
              src="/images/bornholm/bornholm-2-h.webp"
              alt="Galleri billede"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/bornholm/bornholm-1-w.webp"
              alt="Galleri billede"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
          <MediaSlot>
            <Image
              src="/images/bornholm/bornholm-3-w.webp"
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
