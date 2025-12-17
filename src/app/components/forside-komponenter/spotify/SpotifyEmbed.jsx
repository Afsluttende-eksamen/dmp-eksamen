"use client";

import { useState } from "react";
import Button from "../../ui/Button";

export default function SpotifyEmbed({ trackId }) {
  const [load, setLoad] = useState(false);

  if (!load) {
    return (
      <div 
        className="w-full h-[80px] bg-[#282828] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#3E3E3E] transition-colors"
        onClick={() => setLoad(true)}
      >
        <span className="text-white font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#1DB954]">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
          </svg>
          Afspil preview
        </span>
      </div>
    );
  }

  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
      width="100%"
      height="80"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg"
    />
  );
}