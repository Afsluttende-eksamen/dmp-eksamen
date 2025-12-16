"use client";

import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function YouTubeFeed({ videos }) {
  return (
    <div>
      <Link
        href="https://www.youtube.com/@DanserMedPiger"
        target="_blank"
        className="hover:underline flex items-center gap-2"
      >
        <FaYoutube className="w-12 h-12 pl-4  " />
        <h3>YouTube</h3>
      </Link>
      <div className="flex overflow-x-auto gap-2.5 p-4 whitespace-nowrap scrollbar-hide">
        {videos.map((url, idx) => (
          <iframe
            key={idx}
            className="shrink-0 w-[85dvw] min-h-[40dvh] md:w-150 md:h-100 rounded-lg"
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
