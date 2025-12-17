"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import NewsCard from "../news/NewsCard";
import { getNews } from "@/lib/api/news";

export default function NyhederForside() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((news) => {
      const categories = [];
      news.forEach((post) => {
        if (post.category && !categories.includes(post.category)) {
          categories.push(post.category);
        }
      });

      const featuredPosts = [];
      categories.forEach((cat) => {
        for (const post of news) {
          if (post.category === cat) {
            featuredPosts.push(post);
            break;
          }
        }
      });

      setPosts(featuredPosts);
      setLoading(false);
    });
  }, []);

  return (
    <section className="pb-16">
      <div className="px-8 mb-4">
        <h1>SENESTE NYT</h1>
      </div>

      <div className="px-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <h3 className="">Indlæser content...</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href="/nyheder" className="block">
                <NewsCard post={post} />
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center mt-8">
          <Link href="/nyheder">
            <Button variant="primary">ALLE NYHEDER</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
