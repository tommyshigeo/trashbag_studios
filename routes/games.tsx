// routes/games.tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { Game } from "../types/types.ts"; // Import your type

interface GamesPageData {
  games: Game[];
}

export const handler: Handlers<GamesPageData> = {
  async GET(req, ctx) {
    try {
      const resp = await fetch(new URL("/api/games", req.url).href); // Fetch from our API
      if (!resp.ok) {
        console.error("Failed to fetch games:", resp.status, await resp.text());
        return ctx.render({ games: [] });
      }
      const games: Game[] = await resp.json();
      return ctx.render({ games });
    } catch (error) {
      console.error("Error fetching games:", error);
      return ctx.render({ games: [] });
    }
  },
};

export default function GamesPage({ data }: PageProps<GamesPageData>) {
  const { games } = data;

  return (
    <>
      <Head>
        <title>Games - TRASHBAG STUDIO</title>
        <meta name="description" content="Play interactive experiences and games from TRASHBAG STUDIO." />
      </Head>
      <Layout active="/games">
        <h1 class="text-4xl font-bold mb-8 text-brand-primary">Interactive Nightmares & Digital Dreams</h1>
        <p class="text-lg text-gray-300 mb-12">
          Games we made. You might like them. Or not. We're not your mom.
        </p>

        {games.length > 0 ? (
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((g) => (
              <a href={`/games/${g.id}`} key={g.id} class="block bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-brand-primary/40 transition-all duration-300 transform hover:-translate-y-1 group">
                <img src={g.imageUrl} alt={g.title} class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div class="p-6">
                  <h2 class="text-2xl font-semibold mb-2 text-brand-light group-hover:text-brand-primary transition-colors">{g.title}</h2>
                  <p class="text-sm text-brand-primary/80 font-medium mb-1">{g.platform} - {g.year}</p>
                  <p class="text-gray-400 mb-4 text-sm line-clamp-3">{g.description}</p>
                  <span class="inline-block text-brand-primary group-hover:underline text-sm">
                    Check it Out →
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p class="text-xl text-gray-500 text-center py-10">
            No games available. Maybe they glitched out of existence.
          </p>
        )}
        <div class="mt-12 bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-brand-primary transition-colors">
          <h2 class="text-2xl font-semibold mb-2 text-gray-400">Controller-Throwing Fun Incoming...</h2>
          <p class="text-gray-500">Patience, young glitch-hopper.</p>
        </div>
      </Layout>
    </>
  );
}