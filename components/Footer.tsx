// components/Footer.tsx
export default function Footer() {
    return (
      <footer class="bg-black py-8 text-center text-gray-400 border-t border-gray-700">
        <div class="container mx-auto px-4">
          <p>© {new Date().getFullYear()} TRASHBAG STUDIO. All Rights Reserved. Probably.</p>
          <div class="mt-2">
            <a href="#" class="hover:text-brand-primary px-2">X (Twitter)</a>
            <a href="#" class="hover:text-brand-primary px-2">Instagram</a>
            <a href="#" class="hover:text-brand-primary px-2">Vimeo</a>
          </div>
          <p class="text-xs mt-4">Vibe coded with Deno & Fresh 🦕</p>
        </div>
      </footer>
    );
  }