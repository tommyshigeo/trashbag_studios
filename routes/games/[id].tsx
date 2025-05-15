// routes/games/[id].tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx"; // Adjust path
import { Game } from "../../types/types.ts"; // Adjust path

interface GameDetailData {
  gameItem: Game | null;
}

export const handler: Handlers<GameDetailData> = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    try {
      const resp = await fetch(new URL(`/api/games/${id}`, req.url).href);
      if (!resp.ok) {
        if (resp.status === 404) {
          return ctx.renderNotFound();
        }
        console.error(`Failed to fetch game ${id}:`, resp.status, await resp.text());
        return ctx.render({ gameItem: null });
      }
      const gameItem: Game = await resp.json();
      return ctx.render({ gameItem });
    } catch (error) {
      console.error(`Error fetching game ${id}:`, error);
      return ctx.render({ gameItem: null });
    }
  },
};

export default function GameDetailPage({ data }: PageProps<GameDetailData>) {
  const { gameItem } = data;

  if (!gameItem) {
    return (
      <Layout active="/games">
        <Head>
          <title>Game Not Found - TRASHBAG STUDIO</title>
        </Head>
        <div class="text-center py-10">
          <h1 class="text-4xl font-bold text-brand-primary mb-4">404: Game Over, Man!</h1>
          <p class="text-xl text-gray-300">This game seems to have vanished into the digital void.</p>
          <a href="/games" class="mt-6 inline-block bg-brand-primary text-white py-2 px-4 rounded hover:bg-opacity-80">
            Back to All Games
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{gameItem.title} - TRASHBAG STUDIO</title>
        <meta name="description" content={gameItem.description} />
      </Head>
      <Layout active="/games">
        <article class="max-w-4xl mx-auto">
          <div class="mb-8">
            <a href="/games" class="text-brand-primary hover:underline">← Back to Games</a>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">{gameItem.title}</h1>
          <p class="text-lg text-gray-400 mb-2">{gameItem.platform} - {gameItem.year}</p>
          {gameItem.genre && (
            <p class="text-md text-gray-500 mb-4">Genre: {gameItem.genre}</p>
          )}

          <img
            src={gameItem.imageUrl}
            alt={`Cover art for ${gameItem.title}`}
            class="w-full max-h-[500px] object-cover rounded-lg shadow-xl mb-8"
          />

          <div class="prose prose-lg prose-invert text-gray-300 max-w-none">
            <p class="lead text-xl">{gameItem.description}</p>
            {gameItem.longDescription && <p>{gameItem.longDescription}</p>}
            {gameItem.developer && <p class="text-sm italic mt-6">Developed by: {gameItem.developer}</p>}
          </div>

          {gameItem.tags && gameItem.tags.length > 0 && (
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-brand-light mb-2">Tags:</h3>
              <div class="flex flex-wrap gap-2">
                {gameItem.tags.map(tag => (
                  <span key={tag} class="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* You could add a gameplay video or store links here */}
        </article>
      </Layout>
    </>
  );
}