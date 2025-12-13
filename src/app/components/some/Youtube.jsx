"use client";

import Link from "next/link";

export default function YouTubeFeed({ videos }) {
  return (
    <div>
      <Link href="https://www.youtube.com/@DanserMedPiger" target="_blank">
        <h3 className="ml-2"> YouTube</h3>
      </Link>
      <div className="flex overflow-x-auto gap-2.5 p-4 whitespace-nowrap scrollbar-hide">
        {videos.map((url, idx) => (
          <iframe
            key={idx}
            className="shrink-0 w-150 h-100 rounded-lg"
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
