import Footer from './components/Footer';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Navbar from './components/Navbar';
import Platform from './components/Platform';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Platform />
      <Testimonial />
      <Footer />
    </main>
  );
}
