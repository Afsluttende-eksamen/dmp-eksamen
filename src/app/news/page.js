import NewsList from '../components/news/NewsList';

async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_NEWS_API_URL, {
    cache: 'no-store',
    next: { revalidate: 300 },
  });
  return res.json();
}

export default async function News() {
  const posts = await getPosts();
  return <NewsList posts={posts} />;
}
