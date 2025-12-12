"use client";
import Script from "next/script";

export default function Instagram({ posts }) {
  return (
    <>
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div
        className="elfsight-app-0266d283-d73c-4075-9a78-a260545c7e23"
        data-elfsight-app-lazy
      ></div>
      <div>
        <h2>Instagram</h2>
        <div className="overflow-y-hidden w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2.5 h-90 p-4">
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
          />

          {posts.map((url) => (
            <blockquote
              key={url}
              className="relative overflow-hidden -top-15 instagram-media inline-block  mr-4 h-98 w-115 pb-10  rounded-2xl "
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
          ))}
        </div>
      </div>
    </>
  );
}
