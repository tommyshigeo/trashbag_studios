// routes/about.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - TRASHBAG STUDIO</title>
        <meta name="description" content="Learn more about TRASHBAG STUDIO's mission and twisted vision." />
      </Head>
      <Layout active="/about">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold mb-6 text-brand-primary">About <span class="hover:animate-glitch inline-block">TRASHBAG</span> STUDIO</h1>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Replace with a studio/team photo or abstract art
            alt="TRASHBAG STUDIO Vibe"
            class="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
          />
          <div class="prose prose-lg prose-invert text-gray-300"> {/* prose-invert for dark mode text */}
            <p class="text-xl">
              We are TRASHBAG STUDIO. We find beauty in the broken, art in the artifact, and stories in the static.
              Launched from a pile of discarded ideas and fueled by caffeine and questionable life choices, we're an independent art studio dedicated to making movies, films, and games that don't quite fit in.
            </p>
            <p>
              Our philosophy is simple: if it's too polished, it's probably boring. We embrace the grit, the glitch, the gloriously unconventional. We're not afraid to get our hands dirty, digitally or otherwise, to bring our unique visions to life.
            </p>
            <h2 class="text-2xl font-semibold text-brand-primary mt-8 mb-3">Our Manifesto (Kinda)</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Create relentlessly.</li>
              <li>Challenge conventions (and sometimes good taste).</li>
              <li>Find the signal in the noise.</li>
              <li>If it scares you a little, you're on the right track.</li>
              <li>Perfection is the enemy of the weird.</li>
            </ul>
            <p class="mt-6">
              So, welcome to our digital dumpster fire. We hope you find something you like, or at least something that makes you think.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}