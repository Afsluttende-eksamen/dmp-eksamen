import Link from 'next/link';
import Button from './Button';
import NewsCard from '../news/NewsCard';

export default function NyhederForside({ posts = [] }) {
  return (
    <section className="pb-8">
      <div className="px-8 mb-2">
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
