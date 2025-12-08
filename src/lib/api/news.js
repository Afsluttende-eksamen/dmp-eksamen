const NEWS_API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

export async function getNews() {
	const res = await fetch(NEWS_API_URL, {
		cache: 'no-store',
    next: { revalidate: 300 },
	});
	return res.json();
}

