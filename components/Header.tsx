// components/Header.tsx
interface NavItem {
    name: string;
    href: string;
  }
  
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Films", href: "/films" },   
    { name: "Series", href: "/series" },
    { name: "Games", href: "/games" },
    { name: "Recruit", href: "/recruit" },
  ];
  
  export default function Header({ active }: { active?: string }) {
    return (
      <header class="bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" class="text-3xl font-bold text-brand-primary hover:animate-glitch">
            TRASHBAG <span class="text-brand-light">STUDIO</span>
          </a>
          <nav>
            <ul class="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    class={`text-lg hover:text-brand-primary transition-colors
                      ${item.href === active ? "text-brand-primary font-semibold" : "text-brand-light"}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button - Basic Placeholder */}
          {/* <div class="md:hidden">
            <button class="text-white focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div> */}
        </div>
      </header>
    );
  }