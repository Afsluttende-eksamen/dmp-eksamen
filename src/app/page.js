import Navigation from "./components/layout/Navigation";
import Hero from "./components/ui/Hero";
import ImageGallery from "./components/ui/ImageGallery";
import NyhederForside from "./components/ui/NyhederForside";
import Booking from "./components/ui/BookingForside";
import Footer from "./components/layout/Footer";
import SpotifyArtistSection from "./components/spotify/SpotifyArtistSection";
import TourForside from "./components/ui/TourForside";

export default function Home() {
  const featuredArtistId = process.env.SPOTIFY_ARTIST_ID;

  return (
    <div className="relative">
      <section className="relative h-screen flex flex-col bg-black">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/dmp-landing-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col h-full">
          <Navigation variant="white" />
          <main className="flex-1 flex items-end justify-center pb-32">
            <Hero />
          </main>
        </div>
      </section>


      <NyhederForside />
     
      <TourForside />
      <Booking />
      
      <SpotifyArtistSection artistId={featuredArtistId} />

      <ImageGallery />
    
    
    </div>
  );
}
