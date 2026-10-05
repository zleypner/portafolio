import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Educacion from '@/components/home/Educacion';
import Servicios from '@/components/home/Servicios';
import AnwarSelect from '@/components/home/AnwarSelect';
import SobreMi from '@/components/home/SobreMi';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Educacion />
        <Servicios />
        <AnwarSelect />
        <SobreMi />
      </main>
      <Footer />
    </>
  );
}
