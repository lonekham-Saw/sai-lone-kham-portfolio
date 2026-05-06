import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page - Complete Portfolio
 * SQUARE Design: Minimalist, grid-based, sharp corners
 * Sections:
 * 1. Navigation (sticky top)
 * 2. Hero (profile + intro)
 * 3. Featured Work (3-column grid)
 * 4. About (bio + stats)
 * 5. Skills (tools + expertise)
 * 6. Contact (CTA + social)
 * 7. Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main content with top padding for fixed nav */}
      <main className="pt-16">
        <Hero />
        <FeaturedWork />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
