import Image from "next/image";
import Link from "next/link";
import { getArtist, getArtistTopTracks } from "@/lib/api/spotify";

export default async function SpotifyArtistSection({
  artistId,
  topTracksLimit = 4,
  market = "DK",
}) {
  const resolvedArtistId = artistId || process.env.SPOTIFY_ARTIST_ID;

  const topTracks = (await getArtistTopTracks(resolvedArtistId, market)) ?? [];
  const tracksToShow = topTracks.slice(0, topTracksLimit);

  return (
    <section className="w-full px-4 py-12">
      <div className="flex flex-col gap-6 w-full md:flex-row md:items-start">
        <div>
          {tracksToShow.length ? (
            <div className="mt-6">
              <h3>Top tracks</h3>
              <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {tracksToShow.map((track, index) => (
                  <li
                    key={track.id}
                    className="flex flex-row items-center gap-5 rounded-lg px-3 bg-black text-white w-full lg:w-120 h-45 md:h-25 "
                  >
                    <p className="text-gray-500">{index + 1}</p>
                    {track.album?.images?.[2]?.url ? (
                      <Image
                        src={track.album.images[2].url}
                        alt={track.name}
                        width={track.album.images[2].width || 64}
                        height={track.album.images[2].height || 64}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    ) : null}
                    <div className="flex-1">
                      <p>{track.name}</p>
               {/*        <p className="text-gray-500">
                        {track.artists
                          ?.map((artistItem) => artistItem.name)
                          .join(", ")}
                      </p> */}
                    </div>
                    {track.external_urls?.spotify ? (
                      <Link
                        href={track.external_urls.spotify}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-black bg-[#1DB954] text-black px-2 py-1 rounded-lg hover:underline"
                      >
                        Afspil i Spotify
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
