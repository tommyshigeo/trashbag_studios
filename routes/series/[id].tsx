// routes/series/[id].tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx"; // Adjust path
import { Series } from "../../types/types.ts"; // Adjust path

interface SeriesDetailData {
  seriesItem: Series | null;
}

export const handler: Handlers<SeriesDetailData> = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    try {
      const resp = await fetch(new URL(`/api/series/${id}`, req.url).href);
      if (!resp.ok) {
        if (resp.status === 404) {
          return ctx.renderNotFound(); // Fresh way to render 404
        }
        console.error(`Failed to fetch series ${id}:`, resp.status, await resp.text());
        return ctx.render({ seriesItem: null }); // Or a specific error page
      }
      const seriesItem: Series = await resp.json();
      return ctx.render({ seriesItem });
    } catch (error) {
      console.error(`Error fetching series ${id}:`, error);
      return ctx.render({ seriesItem: null }); // Fallback
    }
  },
};

export default function SeriesDetailPage({ data }: PageProps<SeriesDetailData>) {
  const { seriesItem } = data;

  if (!seriesItem) {
    // This case should ideally be handled by ctx.renderNotFound() in handler,
    // but as a fallback or if handler doesn't use renderNotFound for other errors:
    return (
      <Layout active="/series">
        <Head>
          <title>Series Not Found - TRASHBAG STUDIO</title>
        </Head>
        <div class="text-center py-10">
          <h1 class="text-4xl font-bold text-brand-primary mb-4">Oops! Glitch in the System.</h1>
          <p class="text-xl text-gray-300">The series you're looking for couldn't be found.</p>
          <a href="/series" class="mt-6 inline-block bg-brand-primary text-white py-2 px-4 rounded hover:bg-opacity-80">
            Back to All Series
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{seriesItem.title} - TRASHBAG STUDIO</title>
        <meta name="description" content={seriesItem.description} />
      </Head>
      <Layout active="/series">
        <article class="max-w-4xl mx-auto">
          <div class="mb-8">
            <a href="/series" class="text-brand-primary hover:underline">← Back to Series</a>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">{seriesItem.title}</h1>
          <p class="text-lg text-gray-400 mb-2">{seriesItem.genre} - {seriesItem.year}</p>
          {seriesItem.status && (
            <span class={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
              seriesItem.status === "Released" ? "bg-green-500/20 text-green-300" :
              seriesItem.status === "In Production" ? "bg-yellow-500/20 text-yellow-300" :
              "bg-blue-500/20 text-blue-300"
            }`}>
              {seriesItem.status} {seriesItem.episodes ? `(${seriesItem.episodes} Episodes)` : ''}
            </span>
          )}

          <img
            src={seriesItem.imageUrl}
            alt={`Poster for ${seriesItem.title}`}
            class="w-full max-h-[500px] object-cover rounded-lg shadow-xl mb-8"
          />

          <div class="prose prose-lg prose-invert text-gray-300 max-w-none">
            <p class="lead text-xl">{seriesItem.description}</p>
            {seriesItem.longDescription && <p>{seriesItem.longDescription}</p>}
          </div>

          {seriesItem.tags && seriesItem.tags.length > 0 && (
            <div class="mt-8">
              <h3 class="text-xl font-semibold text-brand-light mb-2">Tags:</h3>
              <div class="flex flex-wrap gap-2">
                {seriesItem.tags.map(tag => (
                  <span key={tag} class="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </Layout>
    </>
  );
}