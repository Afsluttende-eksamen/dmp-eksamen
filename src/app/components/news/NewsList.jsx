'use client';

import { useState } from 'react';
import NewsCard from './NewsCard';
import CategoryButton from '../ui/CategoryButton';

const categories = ['Alle', 'Live', 'Musik', 'Nyheder'];

export default function NewsList({ posts = [] }) {
  const [activeCategory, setActiveCategory] = useState('Alle');

  let filteredPosts = [];

  if (activeCategory === 'Alle') {
    filteredPosts = posts;
  } else {
    posts.forEach((post) => {
      if (post.category === activeCategory) {
        filteredPosts.push(post);
      }
    });
  }

  return (
    <div className="px-8 py-16">
      <h1 className="text-6xl md:text-7xl font-black mb-12">NYHEDER</h1>

      <div className="flex gap-3 mb-12">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category.toUpperCase()}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, i) => (
          <NewsCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
}
