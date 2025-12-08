import NewsList from '../components/news/NewsList';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { getNews } from '@/lib/api/news';

export default async function News() {
  const post = await getNews();
  return (
    <div>
      <Navigation />
      <NewsList posts={post} />
      <Footer />
    </div>
  );
}
