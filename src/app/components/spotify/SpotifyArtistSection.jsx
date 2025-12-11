import { getArtistTopTracks } from "@/lib/api/spotify";
import TrackCard from "./TrackCard";
import SpotifyEmbed from "./SpotifyEmbed";

export default async function SpotifyArtistSection({
  artistId,
  topTracksLimit = 6,
  market = "DK",
}) {
  const resolvedArtistId = artistId || process.env.SPOTIFY_ARTIST_ID;

  const topTracks = (await getArtistTopTracks(resolvedArtistId, market)) ?? [];
  const tracksToShow = topTracks.slice(0, topTracksLimit);


  return (
    <section className="relative z-10 w-full bg-black px-8 py-16 overflow-hidden">
      <div className="px-0 pb-16 flex flex-col items-start mx-10 md:mx-20 justify-center text-white mb-8">
        <h1>Musik</h1>
        <h3 className="text-white/80">Find os på Spotify og Apple Music</h3>
      </div>

      <div className="w-full">
        {tracksToShow.length ? (
          <ul className="flex flex-wrap justify-center gap-8">
            {tracksToShow.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
