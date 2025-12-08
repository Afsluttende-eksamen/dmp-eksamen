import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function ImageGallery() {
  const images = [
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-4.jpg',
    '/images/img-5.jpg',
    '/images/img-9.jpg',
  ];

  const videos = [
    '/videos/video-galleri.mp4'
  ];

  return (
    <section className="bg-white mx-20 py-32">
      <div className="px-8">

        <div className="flex justify-center mb-12">
          <h2>GALLERI</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Stort billede til venstre */}
          <div className="relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <Image
              src={images[2]}
              alt="Gallery"
              width={1600}
              height={900}
              priority
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

  
          {/* Billeder øverste til højre */}
          <div className="relative overflow-hidden rounded-3xl group">
            <Image
              src={images[1]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
           
          </div>
             <div className="flex flex-col bg-[#4F649B] justify-between p-6 rounded-3xl">
            <h3 className="text-4xl md:text-6xl mb-12 text-white">
              Udforsk hele vores galleri med billeder fra shows, backstage og meget mere.
            </h3>
            <Link href="/gallery">
              <Button variant="link">TIL GALLERIET</Button>
            </Link>
          </div>
     

      
          {/* Lille billede til venstre nederst */}
          <div className="relative overflow-hidden rounded-3xl group">
            <Image
              src={images[3]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Stort billede til højre nederst */}
          <div className="relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 group">
            {/* <Image
              src={images[4]}
              alt="Gallery"
              width={1600}
              height={900}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            /> */}
             <video src={videos[0]} controls className="w-full h-full object-cover rounded-3xl"></video>
          </div>

          {/* Boksen med CTA-knap */}
               <div className="relative overflow-hidden rounded-3xl group">
            <Image
              src={images[0]}
              alt="Gallery"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
