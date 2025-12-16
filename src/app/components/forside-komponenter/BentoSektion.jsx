import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import MediaGrid from '../media/MediaGrid';
import MediaSlot from '../media/MediaSlot';

export default function BentoSektion() {
  const images = [
    '/images/img-1.webp',
    '/images/img-2.webp',
    '/images/img-4.webp',
    '/images/img-5.webp',
    '/images/img-9.webp',
  ];

  const videos = [
    '/videos/video-galleri.mp4'
  ];

  return (
    <section className="bg-white mx-4 sm:mx-8 md:mx-20 py-16">
      <div className="px-4 md:px-8">

        <div className="flex flex-col justify-center text-center mb-12">
          {/* <h1>GALLERI</h1> */}
           <h2 className="text-black/80 text-center">Følg med i hvad vi laver</h2>
        </div>

        <MediaGrid>
          {/* Video */}
          <MediaSlot size="large">
            <video src={videos[0]} controls className="w-full h-full min-h-[200px] object-cover rounded-3xl" />
          </MediaSlot>

          {/* Billede */}
          <MediaSlot>
            <Image
              src={images[1]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>

          {/* CTA-boks */}
          <MediaSlot>
            <div className="flex flex-col bg-[#4F649B] justify-between p-4 md:p-6 h-full rounded-3xl">
              <h4 className="text-lg sm:text-xl md:text-4xl lg:text-6xl mb-4 md:mb-12 text-white">
                Udforsk hele vores galleri med billeder fra shows, backstage og meget mere.
              </h4>
              <Link href="/gallery">
                <Button variant="secondary">TIL GALLERIET</Button>
              </Link>
            </div>
          </MediaSlot>

          {/* Billede */}
          <MediaSlot>
            <Image
              src={images[3]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>

          {/* Stort billede */}
          <MediaSlot size="large">
            <Image
              src={images[4]}
              alt="Gallery"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>

          {/* Billede */}
          <MediaSlot>
            <Image
              src={images[0]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </MediaSlot>
        </MediaGrid>
      </div>
    </section>
  );
}
