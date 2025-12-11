"use client";

export default function YouTubeFeed({ videos }) {
  return (
    <div>
      <h2>YouTube</h2>
      <div className="flex overflow-x-auto gap-2.5 p-4 whitespace-nowrap scrollbar-hide">
        {videos.map((url, idx) => (
          <iframe
            key={idx}
            className="shrink-0 w-90 h-58 rounded-lg"
            src={url}
            title={`YouTube video ${idx + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}
