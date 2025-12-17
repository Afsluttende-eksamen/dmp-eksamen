"use client";

export default function Spotify() {
  return (
    <div>
      <div className="flex overflow-x-auto gap-2.5 p-4 whitespace-nowrap scrollbar-hide ">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/0OhwwB6b7ugDTS41UT4YJS?utm_source=generator"
          width="80%"
          height="500"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="mx-auto"
        ></iframe>
      </div>
    </div>
  );
}
