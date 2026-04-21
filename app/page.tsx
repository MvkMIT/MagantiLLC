import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Expertise from '@/components/sections/Expertise';
import Technology from '@/components/sections/Technology';
import Jobs from '@/components/sections/Jobs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Team />
      <Expertise />
      <Technology />
      <Jobs />
      <Contact />
      <Footer />
    </main>
  );
}
