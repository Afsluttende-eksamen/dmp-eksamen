export async function getNews() {
	const res = await fetch('https://script.google.com/macros/s/AKfycbw0KTyN_mA0sSUvIP9sGfKz_gnCz7uD3hsO8OXeLM1uR1DJhvt5RLilb1gaqzpNnIMW/exec', {
		cache: 'no-store',
    next: { revalidate: 300 },
	});
	return res.json();
}

