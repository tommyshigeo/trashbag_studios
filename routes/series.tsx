// routes/series.tsx
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { Series } from "../types/types.ts"; // Import your type

interface SeriesPageData {
  series: Series[];
}

export const handler: Handlers<SeriesPageData> = {
  async GET(req, ctx) {
    try {
      const resp = await fetch(new URL("/api/series", req.url).href); // Fetch from our API
      if (!resp.ok) {
        console.error("Failed to fetch series:", resp.status, await resp.text());
        return ctx.render({ series: [] }); // Render with empty or error state
      }
      const series: Series[] = await resp.json();
      return ctx.render({ series });
    } catch (error) {
      console.error("Error fetching series:", error);
      return ctx.render({ series: [] }); // Fallback
    }
  },
};

export default function SeriesPage({ data }: PageProps<SeriesPageData>) {
  const { series } = data;

  return (
    <>
      <Head>
        <title>Series - TRASHBAG STUDIO</title>
        <meta name="description" content="Explore films and series by TRASHBAG STUDIO." />
      </Head>
      <Layout active="/series">
        <h1 class="text-4xl font-bold mb-8 text-brand-primary">Our Series & Films</h1>
        <p class="text-lg text-gray-300 mb-12">
          Dive into the narratives we've painstakingly (or haphazardly) stitched together.
        </p>

        {series.length > 0 ? (
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.map((s) => (
              <a href={`/series/${s.id}`} key={s.id} class="block bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-brand-primary/40 transition-all duration-300 transform hover:-translate-y-1 group">
                <img src={s.imageUrl} alt={s.title} class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div class="p-6">
                  <h2 class="text-2xl font-semibold mb-2 text-brand-light group-hover:text-brand-primary transition-colors">{s.title}</h2>
                  <p class="text-sm text-brand-primary/80 font-medium mb-1">{s.genre} - {s.year}</p>
                  <p class="text-gray-400 mb-4 text-sm line-clamp-3">{s.description}</p>
                  <span class="inline-block text-brand-primary group-hover:underline text-sm">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p class="text-xl text-gray-500 text-center py-10">
            No series found. We're probably busy making more trash.
          </p>
        )}
        {/* Placeholder for more */}
        <div class="mt-12 bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-brand-primary transition-colors">
          <h2 class="text-2xl font-semibold mb-2 text-gray-400">More Cinematic Oddities Coming...</h2>
          <p class="text-gray-500">Stay tuned for what crawls out next.</p>
        </div>
      </Layout>
    </>
  );
}