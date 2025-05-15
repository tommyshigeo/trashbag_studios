// components/Layout.tsx
import { ComponentChildren } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type LayoutProps = {
  children: ComponentChildren;
  active?: string; // To highlight active nav link
};

export default function Layout({ children, active }: LayoutProps) {
  return (
    <div class="flex flex-col min-h-screen bg-brand-dark text-brand-light">
      <Header active={active} />
      <main class="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}