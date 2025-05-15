import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>TRASHBAG STUDIO - We Make Cool Stuff</title>
        <meta name="description" content="TRASHBAG STUDIO: Independent art studio creating unconventional movies, films, and experiences." />
      </Head>
      <Layout active="/">
        {/* Hero Section */}
        <section
          class="h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center relative -mt-8 -mx-4" // Adjust 80px based on your header height
          style="background-image: url('https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');" // Replace with your cool hero image
        >
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> {/* Overlay */}
          <div class="relative z-10 p-6">
            <h1 class="text-5xl md:text-7xl font-bold mb-4 text-brand-light animate-glitch_hover_parent">
              <span class="hover:animate-glitch inline-block">TRASHBAG</span>{" "}
              <span class="text-brand-primary hover:animate-glitch inline-block">STUDIO</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting beautifully chaotic movies, mind-bending series, and games that stick with you. Or don't. Whatever.
            </p>
            <a
              href="/series"
              class="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Junk
            </a>
          </div>
        </section>

        {/* Featured Content Section (Example) */}
        <section class="py-16">
          <h2 class="text-3xl font-bold text-center mb-12 text-brand-primary">
            Fresh Out The Bin
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-brand-primary/30 transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1604975708878-5009f4a2f1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" // Placeholder
                alt="Project Title"
                class="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 class="text-2xl font-semibold mb-2 text-brand-light">Neon Noir: The Series</h3>
              <p class="text-gray-400 mb-4">A gritty tale of a city that never sleeps and the detective who wishes it would.</p>
              <a href="/series" class="text-brand-primary hover:underline">Watch Now →</a>
            </div>
            {/* Add more project cards here */}
            <div class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-brand-primary/30 transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1589984318331-4506f567a801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" // Placeholder
                alt="Project Title"
                class="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 class="text-2xl font-semibold mb-2 text-brand-light">Pixel Panic Attack</h3>
              <p class="text-gray-400 mb-4">An 8-bit adventure where your only weapon is existential dread.</p>
              <a href="/games" class="text-brand-primary hover:underline">Play If You Dare →</a>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-brand-primary/30 transition-shadow">
              <h3 class="text-2xl font-semibold mb-2 text-brand-light">More Coming Soon...</h3>
              <p class="text-gray-400 mb-4">We're always cooking up something beautifully broken.</p>
              <a href="/recruit" class="text-brand-primary hover:underline">Join the Mess →</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}