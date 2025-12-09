import NewsList from '../components/news/NewsList';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { getNews } from '@/lib/api/news';

export default async function News() {
  const post = await getNews();

  const categories = ['Alle'];

  post.forEach(post => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
  }
  )

  return (
    <div>
      <Navigation />
      <NewsList posts={post} categories={categories} />
      <Footer />
    </div>
  );
}
