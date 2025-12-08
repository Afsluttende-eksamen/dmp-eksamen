import Navigation from "./components/layout/Navigation";
import Hero from "./components/ui/Hero";
import ImageGallery from "./components/ui/ImageGallery";
import NyhederForside from "./components/ui/NyhederForside";
import AboutSection from "./components/ui/AboutSection";
import Footer from "./components/layout/Footer";

async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_NEWS_API_URL, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Home() {
  return (
    <div className="relative">
      {/* Video Hero Section */}
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

      {/* Featured News */}
      <NyhederForside />
     

      {/* About Section with Zoom Effect */}
      <AboutSection />

      {/* Image Gallery with Parallax */}
      <ImageGallery />


      {/* Footer */}
      <Footer />
    </div>
  );
}
