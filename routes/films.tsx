// routes/films.tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { Film } from "../types/types.ts";

interface FilmsPageData {
  films: Film[];
}

export const handler: Handlers<FilmsPageData> = {
  async GET(req, ctx) {
    try {
      const resp = await fetch(new URL("/api/films", req.url).href);
      if (!resp.ok) {
        console.error("Failed to fetch films:", resp.status, await resp.text());
        return ctx.render({ films: [] });
      }
      const films: Film[] = await resp.json();
      return ctx.render({ films });
    } catch (error) {
      console.error("Error fetching films:", error);
      return ctx.render({ films: [] });
    }
  },
};

export default function FilmsPage({ data }: PageProps<FilmsPageData>) {
  const { films } = data;

  return (
    <>
      <Head>
        <title>Films - TRASHBAG STUDIO</title>
        <meta name="description" content="Discover standalone films and cinematic works from TRASHBAG STUDIO." />
      </Head>
      <Layout active="/films">
        <h1 class="text-4xl font-bold mb-8 text-brand-primary">Our Films</h1>
        <p class="text-lg text-gray-300 mb-12">
          Standalone cinematic pieces, short and long, born from the TRASHBAG ethos.
        </p>

        {films.length > 0 ? (
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film) => (
              <a href={`/films/${film.id}`} key={film.id} class="block bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-brand-primary/40 transition-all duration-300 transform hover:-translate-y-1 group">
                <img src={film.imageUrl} alt={film.title} class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div class="p-6">
                  <h2 class="text-2xl font-semibold mb-2 text-brand-light group-hover:text-brand-primary transition-colors">{film.title}</h2>
                  <p class="text-sm text-brand-primary/80 font-medium mb-1">{film.genre} - {film.year}</p>
                  <p class="text-gray-400 mb-4 text-sm line-clamp-3">{film.description}</p>
                  <span class="inline-block text-brand-primary group-hover:underline text-sm">
                    View Details →
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p class="text-xl text-gray-500 text-center py-10">
            No films currently listed. Check back soon for our latest cinematic garbage.
          </p>
        )}
         <div class="mt-12 bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-brand-primary transition-colors">
          <h2 class="text-2xl font-semibold mb-2 text-gray-400">More Reels of Ruin Rolling Soon...</h2>
          <p class="text-gray-500">The projector is warming up.</p>
        </div>
      </Layout>
    </>
  );
}