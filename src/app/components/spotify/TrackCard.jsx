"use client";

import Image from "next/image";
import Button from "../ui/Button";
import SpotifyEmbed from "./SpotifyEmbed";

export default function TrackCard({ track }) {
  const trackId = track.uri?.split(":")[2];
  const trackName = encodeURIComponent(track.name);
  const artistName = encodeURIComponent(track.artists?.[0]?.name || "");
  const appleMusicSearchUrl = `https://music.apple.com/dk/search?term=${trackName}%20${artistName}`;

  return (
    <div className="flex flex-col items-center lg:w-100 lg:h-100 md:w-80 md:h-120 gap-5 rounded-2xl px-5 py-5text-white transition-transform duration-200 hover:scale-105">
      <Image
        src={track.album.images[0].url}
        alt={track.name}
        width={track.album.images[0].width}
        height={track.album.images[0].height}
        className="lg:h-100 lg:w-100 md:w-80 md:h-80 w-70 h-70  rounded-xl object-cover"
      />
      <SpotifyEmbed trackId={trackId} />
      <div className="flex gap-3">
        <Button
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          variant="spotify"
        >
          Åbn Spotify
        </Button>
        
        <Button
          href={appleMusicSearchUrl}
          target="_blank"
          rel="noreferrer"
          variant="apple"
        >
          Apple Music
        </Button>
      </div>
    </div>
  );
}