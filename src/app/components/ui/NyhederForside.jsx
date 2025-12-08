import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

async function getFeaturedPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_NEWS_API_URL, { 
    next: { revalidate: 300 } 
  });
  const data = await res.json();

  const categories = ['Live', 'Musik', 'Nyheder'];
  const featured = categories
    .map(cat => data.filter(p => p.category === cat)[0])
    .filter(p => p);

  return featured;
}

export default async function NyhederForside() {
  const posts = await getFeaturedPosts();

  if (posts.length === 0) return null;

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
            <Link
              key={i}
              href="/news"
              className="relative aspect-square cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="opacity-80 uppercase mb-2">
                  {post.category}
                </div>
                <h3 className="mb-3 hover:underline">
                  {post.title}
                </h3>
                <p className=" opacity-80">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
          <div className="flex items-center justify-end mt-6">
          <Link href="/news">
          <Button variant="link">SE ALLE</Button>
        </Link>
        </div>
      </div>
    </section>
  );
}
