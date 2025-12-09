
export async function getProducts() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbx67c8xCAp5YstOb-rBuMl6LYsiU7Ll6QplMgC_tjCZ0NAYprCFzF8UvHNoCXV43EJC/exec"
    , {
      cache: 'no-store',
      next: { revalidate: 300 },
    });
  return res.json();
}