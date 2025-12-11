"use client";
import Script from "next/script";

export default function TikTokEmbed({ tiktokPosts }) {
  return (
    <div>
      <h2>TikTok</h2>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      <div className="flex overflow-x-scroll w-full gap-2.5 p-4 whitespace-nowrap scrollbar-hide h-145 overflow-y-hidden">
        {tiktokPosts.map((url) => {
          const videoId = url.split("/video/")[1];
          return (
            <blockquote
              key={url}
              className="relative -top-5  tiktok-embed mr-4 inline-block h-140 overflow-hidden pb-20 rounded-xl"
              cite={url}
              data-video-id={videoId}
              style={{
                minWidth: "300px",

                display: "inline-block",
              }}
            >
              <section>
                <a target="_blank" title="@dansermedpiger" href={url}>
                  @dansermedpiger
                </a>
              </section>
            </blockquote>
          );
        })}
      </div>
    </div>
  );
}
