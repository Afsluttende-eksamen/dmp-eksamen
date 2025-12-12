"use client";
import Script from "next/script";

export default function Instagram({ posts }) {
  return (
    <>
      <div>
        <h2>Instagram</h2>
        <div className="overflow-y-hidden w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2.5 h-150 pb-4">
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
          />

          {posts.map((url) => (
            <div key={url}>
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
