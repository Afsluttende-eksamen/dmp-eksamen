import Footer from "../components/layout/Footer";
import CartIcon from "../components/cart/CartIcon";
import Instagram from "../components/some/Instagram";
import InstagramEmbed from "../components/some/Instagram";
import TikTokEmbed from "../components/some/Tiktok";
import YouTubeFeed from "../components/some/Youtube";
export default function Concerts() {
  return (
    <div>
      <InstagramEmbed
        posts={[
          "https://www.instagram.com/p/DRkHkAZjHap/",
          "https://www.instagram.com/p/DLe8aEqsvrL/",
          "https://www.instagram.com/p/DKulEPQiGq8/",
          "https://www.instagram.com/p/DKKa3sfs4Or/",
          "https://www.instagram.com/p/DJ4MWJ-sJF8/",
          "https://www.instagram.com/p/DIv5cNrM7vU/",
        ]}
      />
      <TikTokEmbed
        tiktokPosts={[
          "https://www.tiktok.com/@dansermedpiger/video/7581542355820432643",
          "https://www.tiktok.com/@dansermedpiger/video/7579660453069016342",
          "https://www.tiktok.com/@dansermedpiger/video/7546601530791660822",
          "https://www.tiktok.com/@dansermedpiger/video/7531763809195740438",
          "https://www.tiktok.com/@dansermedpiger/video/7527670616883727638",
          "https://www.tiktok.com/@dansermedpiger/video/7522852754495229206",
        ]}
      />

      <YouTubeFeed
        videos={[
          "https://www.youtube.com/embed/7t0W4ANPOUU?si=zXg8nCpHMrU0q-0T",
          "https://www.youtube.com/embed/47X1M9SYqSw?si=L4yqBHoao88Qh1Q0",
          "https://www.youtube.com/embed/HIrmfSUZ4i4?si=0trDmgt3fyW894cG",
          "https://www.youtube.com/embed/URbWuLjIYaQ?si=N_whjD0DODLwrhsz",
          "https://www.youtube.com/embed/rRG8NDu-CEs?si=8AYM65mBo7H3o2Fh",
        ]}
      />
      <Footer></Footer>
    </div>
  );
}
