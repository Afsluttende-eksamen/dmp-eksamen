
export async function getProducts() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbxyglVO0JZvY7p_9oeFzOnS1INL1-XfvLQmRfgs-okatuJPF7gFpCJeg0za1Dpumnhk/exec"
    , {
      cache: 'no-store',
      next: { revalidate: 300 },
    });

    
  return res.json();
}

export async function getProductBySlug(slug) {

  const products = await getProducts();
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.slug === slug) return p;
  }
  return null;
}