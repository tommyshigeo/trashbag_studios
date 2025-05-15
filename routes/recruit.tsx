// routes/recruit.tsx
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function RecruitPage() {
  return (
    <>
      <Head>
        <title>Recruit - Join TRASHBAG STUDIO</title>
        <meta name="description" content="Want to make weird stuff with us? TRASHBAG STUDIO is hiring (maybe)." />
      </Head>
      <Layout active="/recruit">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold mb-6 text-brand-primary">Join the Chaos Crew</h1>
          <p class="text-xl text-gray-300 mb-8">
            Think you've got the right kind of wrong stuff? TRASHBAG STUDIO is always on the lookout for fellow misfits, creative deviants, and digital dumpster divers.
          </p>

          <div class="bg-gray-800 p-8 rounded-lg shadow-xl mb-10">
            <h2 class="text-2xl font-semibold text-brand-light mb-4">Why TRASHBAG?</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-400 mb-6">
              <li>Work on projects that actually excite you (and possibly confuse your parents).</li>
              <li>Embrace imperfection and experimentation.</li>
              <li>Collaborate with a small, passionate team of weirdos.</li>
              <li>Your bad ideas might just be our next big hit.</li>
              <li>Flexible hours (because creativity doesn't punch a clock, but deadlines do).</li>
            </ul>
            <p class="text-gray-300">
              We value raw talent, unique perspectives, and a healthy disregard for the status quo over years of "traditional" experience.
            </p>
          </div>

          <div class="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 class="text-2xl font-semibold text-brand-light mb-4">Open Positions (Sort Of)</h2>
            <p class="text-gray-400 mb-6">
              We're not always formally hiring, but we're always interested in hearing from talented folks. If you think your skills could add to our beautiful mess, drop us a line.
            </p>
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold text-brand-primary">General Submission</h3>
                <p class="text-gray-400">
                  Filmmakers, animators, game developers, writers, sound designers, VFX artists, pixel pushers, chaos coordinators... if you do cool stuff, show us.
                </p>
              </div>
              {/* Example of a specific role if you had one
              <div>
                <h3 class="text-xl font-semibold text-brand-primary">Lead Glitch Artist</h3>
                <p class="text-gray-400">
                  Expert in breaking things beautifully. Must be proficient in at least three forms of digital entropy.
                </p>
              </div>
              */}
            </div>
            <div class="mt-8 text-center">
              <a
                href="mailto:careers@trashbag.studio?subject=Joining%20the%20Chaos%3A%20[Your%20Name]"
                class="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 shadow-lg"
              >
                Pitch Us Your Weirdness
              </a>
              <p class="text-xs text-gray-500 mt-3">(Send us your portfolio, a cool idea, or just a really good joke.)</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}   