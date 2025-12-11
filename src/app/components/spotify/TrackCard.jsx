"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TrackCard({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (!track.preview_url || hasError) return;
    
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play().catch((error) => {
        console.error("Playback error:", error);
        setHasError(true);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };
    const handleCanPlay = () => setHasError(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <li className="flex flex-col items-center gap-5 rounded-lg px-4 py-3 bg-black text-white transition-transform duration-200 hover:scale-110">
      {track.album?.images?.[0]?.url ? (
        <div 
          onClick={handleImageClick}
          className={`relative ${track.preview_url && !hasError ? 'cursor-pointer hover:opacity-80' : ''}`}
        >
          <Image
            src={track.album.images[0].url}
            alt={track.name}
            width={track.album.images[0].width || 64}
            height={track.album.images[0].height || 64}
            className="h-100 w-100 rounded-md object-cover"
          />
          {track.preview_url && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/60 rounded-full p-4 transition-opacity">
                {isPlaying ? (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}
      
      {track.preview_url && (
        <audio 
          ref={audioRef} 
          src={track.preview_url} 
          preload="metadata"
        />
      )}
      
      <div className="flex-1">
        <p>{track.name}</p>
      </div>
      
      {track.external_urls?.spotify && (
        <Link
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-black bg-[#1DB954] text-black px-2 py-1 mb-6 rounded-lg hover:opacity-90"
        >
          Afspil i Spotify
        </Link>
      )}
    </li>
  );
}