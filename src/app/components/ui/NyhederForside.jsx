'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import NewsCard from '../news/NewsCard';
import { getNews } from '@/lib/api/news';

export default function NyhederForside() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getNews().then(news => {
      const categories = [];
      news.forEach(post => {
        if (post.category && !categories.includes(post.category)) {
          categories.push(post.category);
        }
      });

      const featuredPosts = [];
      categories.forEach(cat => {
        for (const post of news) {
          if (post.category === cat) {
            featuredPosts.push(post);
            break;
          }
        }
      });

      setPosts(featuredPosts);
    });
  }, []);

  return (
    <section className="py-16">
      <div className="px-8 mb-8">
        <h1>SENESTE NYT</h1>
      </div>

      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href="/news" className="block">
              <NewsCard post={post} />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <Link href="/news">
            <Button variant="primary">SE ALLE</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
