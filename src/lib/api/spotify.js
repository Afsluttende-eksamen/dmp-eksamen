const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_URL = "https://api.spotify.com/v1";

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  const data = await res.json();
  return data.access_token;
}

export async function getArtist(artistId) {
  const token = await getAccessToken();
  const res = await fetch(`${API_URL}/artists/${artistId}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  });

  return res.json();
}

export async function getArtistTopTracks(artistId, market = "DK") {
  const token = await getAccessToken();
  const res = await fetch(`${API_URL}/artists/${artistId}/top-tracks?market=${market}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  });

  const data = await res.json();
  return data.tracks || [];
}