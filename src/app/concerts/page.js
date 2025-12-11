import Footer from "../components/layout/Footer";
import CartIcon from "../components/cart/CartIcon";
import Instagram from "../components/some/Instagram";
import InstagramEmbed from "../components/some/Instagram";
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
      <Footer></Footer>
    </div>
  );
}
