// routes/films/[id].tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx"; // Adjust path
import { Film } from "../../types/types.ts"; // Adjust path

interface FilmDetailData {
  filmItem: Film | null;
}

export const handler: Handlers<FilmDetailData> = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    try {
      const resp = await fetch(new URL(`/api/films/${id}`, req.url).href);
      if (!resp.ok) {
        if (resp.status === 404) {
          return ctx.renderNotFound();
        }
        console.error(`Failed to fetch film ${id}:`, resp.status, await resp.text());
        return ctx.render({ filmItem: null });
      }
      const filmItem: Film = await resp.json();
      return ctx.render({ filmItem });
    } catch (error) {
      console.error(`Error fetching film ${id}:`, error);
      return ctx.render({ filmItem: null });
    }
  },
};

export default function FilmDetailPage({ data }: PageProps<FilmDetailData>) {
  const { filmItem } = data;

  if (!filmItem) {
    return (
      <Layout active="/films">
        <Head>
          <title>Film Not Found - TRASHBAG STUDIO</title>
        </Head>
        <div class="text-center py-10">
          <h1 class="text-4xl font-bold text-brand-primary mb-4">Error 404: Film Lost in Post.</h1>
          <p class="text-xl text-gray-300">We couldn't find this cinematic masterpiece (or mess-terpiece).</p>
          <a href="/films" class="mt-6 inline-block bg-brand-primary text-white py-2 px-4 rounded hover:bg-opacity-80">
            Back to All Films
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{filmItem.title} - TRASHBAG STUDIO</title>
        <meta name="description" content={filmItem.description} />
      </Head>
      <Layout active="/films">
        <article class="max-w-4xl mx-auto">
          <div class="mb-8">
            <a href="/films" class="text-brand-primary hover:underline">← Back to Films</a>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-2 text-brand-primary">{filmItem.title}</h1>
          <div class="flex flex-wrap gap-x-4 items-center text-gray-400 mb-4 text-md">
            <span>Directed by: {filmItem.director}</span>
            <span>|</span>
            <span>{filmItem.genre}</span>
            <span>|</span>
            <span>{filmItem.year}</span>
            {filmItem.runtime && (
                <><span>|</span><span>{filmItem.runtime}</span></>
            )}
          </div>

          <img
            src={filmItem.imageUrl}
            alt={`Poster for ${filmItem.title}`}
            class="w-full max-h-[500px] object-cover rounded-lg shadow-xl mb-8"
          />

          <div class="prose prose-lg prose-invert text-gray-300 max-w-none">
            <p class="lead text-xl">{filmItem.description}</p>
            {filmItem.longDescription && <p>{filmItem.longDescription}</p>}
          </div>

          {filmItem.tags && filmItem.tags.length > 0 && (
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-brand-light mb-2">Tags:</h3>
              <div class="flex flex-wrap gap-2">
                {filmItem.tags.map(tag => (
                  <span key={tag} class="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Example: Trailer section (if applicable) */}
          {/* <div class="mt-10">
            <h2 class="text-2xl font-semibold text-brand-light mb-4">Watch Trailer</h2>
            <div class="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-lg">
              Replace with your video embed code
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div> */}
        </article>
      </Layout>
    </>
  );
}