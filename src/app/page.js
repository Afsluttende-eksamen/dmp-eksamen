import Navigation from "./components/layout/Navigation";
import Hero from "./forside-komponenter/Hero";
import ImageGallery from "./forside-komponenter/ImageGallery";
import NyhederForside from "./forside-komponenter/NyhederForside";
import Booking from "./forside-komponenter/BookingForside";
import SpotifyArtistSection from "./forside-komponenter/spotify/SpotifyArtistSection";
import TourForside from "./forside-komponenter/TourForside";

export default function Home() {
  const featuredArtistId = process.env.SPOTIFY_ARTIST_ID;

  return (
    <main>
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/dmp-landing-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col h-full">
          <Navigation variant="white" />
          <div className="flex-1 flex items-end justify-center pb-16">
            <Hero />
          </div>
        </div>
      </section>
      <NyhederForside />
      <TourForside />
      <Booking />
      <SpotifyArtistSection artistId={featuredArtistId} />
      <ImageGallery />
    </main>
  );
}
