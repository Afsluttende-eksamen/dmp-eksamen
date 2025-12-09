import Link from 'next/link';
import Button from './Button';
import NewsCard from '../news/NewsCard';
import { getNews } from '@/lib/api/news';

export default async function NyhederForside() {
  const allPosts = await getNews();
  const categories = ['Live', 'Musik', 'Nyheder'];
  const posts = [];
  categories.forEach((cat) => {
    for (const post of allPosts) {
      if (post.category === cat) {
        posts.push(post);
        break;
      }
    }
  });


  return (
    <section className=" py-16">
      <div className="px-8 mb-8">
        <h2>
          SENESTE NYT
        </h2>
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
