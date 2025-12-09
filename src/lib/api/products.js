
export async function getProducts() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbzvkDaCSaY8XlmCI14PxcahsWYTwLrRdOQVb29cBPCl4TJfDmbRmvP_B7E4N3C3YDMR/exec"
    , {
      cache: 'no-store',
      next: { revalidate: 300 },
    });
  return res.json();
}