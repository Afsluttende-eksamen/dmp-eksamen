"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Instagram({ posts }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [posts]);
  return (
    <>
      <div>
        <Link
          href="https://www.instagram.com/dansermedpiger/"
          target="_blank"
          className="hover:underline"
        >
          <h3 className="ml-2">Instagram</h3>
        </Link>
        <div className="overflow-y-hidden w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2.5 h-150 pb-4">
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
          />

          {posts.map((url) => (
            <div className="contain-content rounded-2xl" key={url}>
              <blockquote
                key={url}
                className="relative overflow-hidden -top-15 instagram-media inline-block  mr-4 h-300 w-115 pb-20  rounded-2xl "
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  width: "600px",
                  display: "inline-block",
                  background: "#fff",
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
