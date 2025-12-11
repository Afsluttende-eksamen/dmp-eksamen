import Footer from "../components/layout/Footer";
import CartIcon from "../components/cart/CartIcon";
import Instagram from "../components/some/Instagram";
import InstagramEmbed from "../components/some/Instagram";
import TikTokEmbed from "../components/some/Tiktok";
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
      <Footer></Footer>
    </div>
  );
}
