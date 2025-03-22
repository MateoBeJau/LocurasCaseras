import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ProductSection } from '@/components/ProductSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { SocialIcons } from '@/components/SocialIcons';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="nosotros">
          <About />
        </section>
        
        <section id="productos">
          <ProductSection />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
        
        <Footer />
      </main>
      <SocialIcons />
      <ScrollToTop />
    </>
  );
}
