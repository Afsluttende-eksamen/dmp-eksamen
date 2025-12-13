import { getArtistTopTracks } from "@/lib/api/spotify";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get('artistId') || process.env.SPOTIFY_ARTIST_ID;
  const market = searchParams.get('market');
  const limit = parseInt(searchParams.get('limit'));

  const topTracks = await getArtistTopTracks(artistId, market);
  const tracksToShow = topTracks.slice(0, limit);
  
  return Response.json({ tracks: tracksToShow });
}