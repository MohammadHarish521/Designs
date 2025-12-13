import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Features />
      <Works />
      <Platform />
      <Testimonial />
      <Footer />
    </main>
  );
}
