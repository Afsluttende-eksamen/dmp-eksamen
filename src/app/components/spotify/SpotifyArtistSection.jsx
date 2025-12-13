'use client';

import { useEffect, useState } from 'react';
import TrackCard from './TrackCard';

export default function SpotifyArtistSection({
  artistId,
  topTracksLimit = 10,
  market = "DK",
}) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`/api/spotify/top-tracks?artistId=${artistId}&market=${market}&limit=${topTracksLimit}`)
      .then(res => res.json())
      .then(data => {
        setTracks(data.tracks || []);
      });
  }, [artistId, market, topTracksLimit]);

  return (
    <section className="relative z-10 w-full bg-black px-8 py-16 overflow-hidden">
      <div className="px-0 pb-16 flex flex-col items-start mx-4 justify-center text-white">
        <h1>MUSIK</h1>
        <h2 className="text-white/80">Find os på Spotify og Apple Music</h2>
      </div>

      <div>
          <div className="flex h-140 pb-16 items-center overflow-x-auto gap-2.5 whitespace-nowrap scrollbar-hide">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
      </div>
    </section>
  );
}