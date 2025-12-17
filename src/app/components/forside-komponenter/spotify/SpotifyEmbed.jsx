"use client";

import { useState } from "react";
import Button from "../../ui/Button";
import { FaPlayCircle } from "react-icons/fa";

export default function SpotifyEmbed({ trackId }) {
  const [load, setLoad] = useState(false);

  if (!load) {
    return (
      <div 
        className="w-full h-15 md:h-20 bg-[#282828] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#3E3E3E] transition-colors"
        onClick={() => setLoad(true)}
      >
        <span className="text-white font-medium flex items-center gap-2">
          <FaPlayCircle className="w-8 h-8 text-[#1DB954]" />
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