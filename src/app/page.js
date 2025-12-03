import Navigation from "./components/layout/Navigation";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 scale-100"
      >
        <source src="/videos/dmp-landing-video.mp4" type="video/mp4" />
      </video>
      <Navigation variant="white" />
      <main className="flex-1 flex items-end justify-center pb-32">
        <Hero />
      </main>
    </div>
  );
}
